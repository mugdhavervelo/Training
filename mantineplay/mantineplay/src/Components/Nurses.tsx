import React, { useState } from 'react';
import {
  Tabs,
  Badge,
  AppShell,
  Burger,
  Button,
  Table,
  ScrollArea,
  Modal,
  TextInput,
  Group,
  Card,
  Checkbox,
  Text,
} from '@mantine/core';
import { Link } from 'react-router-dom';
import { ActionIcon } from '@mantine/core';
import {
  IconBell,
  IconChevronLeft,
  IconChevronRight,
  IconArrowUp,
  IconArrowDown,
  IconChevronDown,
} from '@tabler/icons-react';
import dashboardIcon from "../images/dashboard.png";
import patientssvg from "../images/patients.svg";
import alertspng from "../images/alerts.svg";
import providerspng from "../images/providers.svg";
import nursespng from "../images/nurses.svg";
import devicesvg from "../images/devicess.svg";
import programpng from "../images/program.svg";
import userpng from "../images/users.svg";
import settingspng from "../images/settings.svg";
import signout from "../images/signout.svg";
import sidebarimg from "../images/Dashboard-2.png"

const menuItems = [
  { icon: <img src={dashboardIcon} alt="Dashboard" top= {139} left= {47} width= {22} height= {18} />, label: "Dashboard", link: "/" },
  { icon: <img src={patientssvg} alt="Patients" top= {139} left= {47} width= {22} height= {18} />, label: "Patients", link: "/Patients" },
  { icon: <img src={alertspng} alt="Alerts" top= {139} left= {47} width= {22} height= {18} />, label: "Alerts", link: "/Alerts" },
  { icon: <img src={providerspng} alt="Providers" top= {139} left= {47} width= {22} height= {18} />, label: "Providers", link: "/Providers" },
  { icon: <img src={nursespng} alt="Nurses"top= {139} left= {47} width= {22} height= {18} />, label: "Nurses", link: "/Nurses" },
  { icon: <img src={devicesvg} alt="Devices"top= {139} left= {47} width= {22} height= {18} />, label: "Devices", link: "/Devices" }, // Fixed typo from "devicess"
  { icon: <img src={programpng} alt="Program"top= {139} left= {47} width= {22} height= {18} />, label: "Programs", link: "/Programs" },
  { icon: "📝", label: "Orders", link: "/Orders" }, // This is fine since it's an emoji
  { icon: <img src={userpng} alt="Users"top= {139} left= {47} width= {22} height= {18} />, label: "Users", link: "/Users" },
  { icon: <img src={settingspng} alt="Settings"top= {139} left= {47} width= {22} height= {18} />, label: "Settings", link: "/Settings" },
  { icon: <img src={signout} alt="SignOut"top= {139} left= {47} width= {22} height= {18} />, label: "SignOut", link: "/Users" },


];


// Sample initial data for nurses and nurse pools
const initialNurses = [
  { id: 1, name: 'Nurse Alice', email: 'alice@example.com', username: 'alice123', roles: 'Head Nurse', lastLogin: '2025-02-16', status: 'Active' },
  { id: 2, name: 'Nurse Bob', email: 'bob@example.com', username: 'bob456', roles: 'Nurse', lastLogin: '2025-02-15', status: 'Inactive' },
  { id: 3, name: 'Nurse Carol', email: 'carol@example.com', username: 'carol789', roles: 'Nurse', lastLogin: '2025-02-14', status: 'Active' },
  { id: 4, name: 'Nurse Dave', email: 'dave@example.com', username: 'dave123', roles: 'Nurse', lastLogin: '2025-02-13', status: 'Inactive' },
  { id: 5, name: 'Nurse Alice', email: 'alice@example.com', username: 'alice123', roles: 'Head Nurse', lastLogin: '2025-02-16', status: 'Active' },
  { id: 6, name: 'Nurse Bob', email: 'bob@example.com', username: 'bob456', roles: 'Nurse', lastLogin: '2025-02-15', status: 'Inactive' },
  { id: 7, name: 'Nurse Carol', email: 'carol@example.com', username: 'carol789', roles: 'Nurse', lastLogin: '2025-02-14', status: 'Active' },
  { id: 8, name: 'Nurse Dave', email: 'dave@example.com', username: 'dave123', roles: 'Nurse', lastLogin: '2025-02-13', status: 'Inactive' },
];

const initialNursePools = [
  { id: 1, name: 'Emergency Care Pool', members: 5, lastLogin: '2025-02-16', patients: 40, description: 'Emergency care specialists', status: 'Active' },
  { id: 2, name: 'ICU Pool', members: 4, lastLogin: '2025-02-14', patients: 30, description: 'ICU specialists', status: 'Active' },
  { id: 3, name: 'Pediatrics Pool', members: 3, lastLogin: '2025-02-12', patients: 20, description: 'Pediatrics specialists', status: 'Inactive' },
  { id: 4, name: 'Emergency Care Pool', members: 5, lastLogin: '2025-02-16', patients: 40, description: 'Emergency care specialists', status: 'Active' },
  { id: 5, name: 'ICU Pool', members: 4, lastLogin: '2025-02-14', patients: 30, description: 'ICU specialists', status: 'Active' },
  { id: 6, name: 'Pediatrics Pool', members: 3, lastLogin: '2025-02-12', patients: 20, description: 'Pediatrics specialists', status: 'Inactive' },
  { id: 7, name: 'Emergency Care Pool', members: 5, lastLogin: '2025-02-16', patients: 40, description: 'Emergency care specialists', status: 'Active' },
  { id: 8, name: 'ICU Pool', members: 4, lastLogin: '2025-02-14', patients: 30, description: 'ICU specialists', status: 'Active' },
  { id: 9, name: 'Pediatrics Pool', members: 3, lastLogin: '2025-02-12', patients: 20, description: 'Pediatrics specialists', status: 'Inactive' }
];

const Nurses = () => {
  const [opened, setOpened] = useState(true);
  const [nurses, setNurses] = useState(initialNurses);
  const [nursePools, setNursePools] = useState(initialNursePools);
  const [modalOpen, setModalOpen] = useState(false);
  const [newNurse, setNewNurse] = useState({ name: '', email: '', username: '', roles: '', lastLogin: '', status: '' });
  const [newNursePool, setNewNursePool] = useState({ name: '', members: '', lastLogin: '', patients: '', description: '', status: '' });
  const [sortOrder, setSortOrder] = useState<{ [key: string]: 'asc' | 'desc' }>({});

  const handleInputChangeNurse = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewNurse({ ...newNurse, [e.target.name]: e.target.value });
  };

  const handleInputChangeNursePool = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewNursePool({ ...newNursePool, [e.target.name]: e.target.value });
  };

  const addNurse = () => {
    if (!newNurse.name || !newNurse.email || !newNurse.username) return;
    const newId = nurses.length > 0 ? nurses[nurses.length - 1].id + 1 : 1;
    setNurses([...nurses, { id: newId, ...newNurse }]);
    setModalOpen(false);
    setNewNurse({ name: '', email: '', username: '', roles: '', lastLogin: '', status: '' });
  };

  const addNursePool = () => {
    if (!newNursePool.name || !newNursePool.description) return;
    const newId = nursePools.length > 0 ? nursePools[nursePools.length - 1].id + 1 : 1;
    setNursePools([...nursePools, { id: newId, ...newNursePool }]);
    setModalOpen(false);
    setNewNursePool({ name: '', members: '', lastLogin: '', patients: '', description: '', status: '' });
  };

  const sortData = (column: string) => {
    const order = sortOrder[column] === 'asc' ? 'desc' : 'asc';
    setSortOrder({ [column]: order });

    if (column === 'name' || column === 'email' || column === 'username') {
      const sortedData = [...nurses].sort((a, b) => {
        if (a[column] < b[column]) return order === 'asc' ? -1 : 1;
        if (a[column] > b[column]) return order === 'asc' ? 1 : -1;
        return 0;
      });
      setNurses(sortedData);
    }
  };

  const sortPoolData = (column: string) => {
    const order = sortOrder[column] === 'asc' ? 'desc' : 'asc';
    setSortOrder({ [column]: order });

    if (column === 'name' || column === 'description') {
      const sortedData = [...nursePools].sort((a, b) => {
        if (a[column] < b[column]) return order === 'asc' ? -1 : 1;
        if (a[column] > b[column]) return order === 'asc' ? 1 : -1;
        return 0;
      });
      setNursePools(sortedData);
    }
  };

  return (
    <AppShell header={{ height: 60 }} navbar={{ width: opened ? 200 : 80, breakpoint: 'sm' }} padding="md">
              <AppShell.Header p="md" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Group gap="xs">
                  <Burger opened={opened} onClick={() => setOpened(!opened)} hiddenFrom="sm" size="sm" />
                  <ActionIcon variant="default" color="gray" onClick={() => setOpened(!opened)} radius="xl">
                    {opened ? <IconChevronLeft size={24} /> : <IconChevronRight size={24} />}
                  </ActionIcon>
                </Group>
                <Group gap="xs">
                  <ActionIcon variant="subtle" color="black">
                    <IconBell size={24} />
                  </ActionIcon>
                  <Group gap="xs">
                    <div style={{ width: 32, height: 32, borderRadius: '50%', backgroundColor: '#e9ecef' }}></div>
                    <span>John Martin Doe</span>
                  </Group>
                </Group>
              </AppShell.Header>
    

      {/* Sidebar */}
     
     <AppShell.Navbar
       p="md"
       style={{
         transition: 'width 0.3s ease',
         width: opened ? '200px' : '80px', // Sidebar width toggles
         overflow: 'hidden',
       }}
     >
       <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
         {menuItems.map((item) => (
           <Button
             key={item.label}
             component={Link}
             to={item.link}
             variant="subtle"
             fullWidth
             leftSection={<span style={{ fontSize: '20px' }}>{item.icon}</span>}
             styles={{
               root: {
                 justifyContent: 'flex-start',
                 padding: '8px 16px',
                 width: opened ? '100%' : '50px',
               },
               inner: {
                 justifyContent: opened ? 'flex-start' : 'center',
               },
               label: {
                 display: opened ? 'block' : 'none',
               },
             }}
           >
             {opened && item.label}
           </Button>
         ))}
       </div>
     
       {/* Sidebar Image - Shrinks when collapsed */}
       <img
         src={sidebarimg}
         alt="dashboard"
         style={{
           position: "absolute",
           bottom: "0px",
           left: "50%",
           transform: "translateX(-50%)",
           width: opened ? "80%" : "80%", // Image size reduces when collapsed
           transition: "width 0.3s ease",
         }}
       />
     </AppShell.Navbar>

      {/* Main Content */}
      <AppShell.Main>
      <div style={{ 
        padding: '20px', 
        marginTop: "50px", 
        boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.2)', 
        borderRadius: '8px', 
        marginBottom: '25px' 
      }}>

        <Tabs color="teal" defaultValue="nurse">
          <Tabs.List>
            <Tabs.Tab value="nurse">Nurses</Tabs.Tab>
            <Tabs.Tab value="nursePool" color="green">
              Nurse Pool
            </Tabs.Tab>
          </Tabs.List>

          {/* Nurses Tab */}
          <Tabs.Panel value="nurse" pt="xs">
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '15px' }}>
              <Button color="red">ADD PROVIDER</Button>
              <hr style={{ margin: '10px 0', border: '1px solid #ddd' }} />
            </div>

            <ScrollArea style={{ width: '100%' }}>
             <Text size="lg" fw={700} mb="md">
               Nurses <span style={{ color: "grey" }}>(10 Times)</span>
             </Text>
                <Table highlightOnHover striped withBorder>
                  <Table.Thead>
                    <Table.Tr>
                      <Table.Th onClick={() => sortData('name')}>
                        Name {sortOrder.name === 'asc' ? '↑' : sortOrder.name === 'desc' ? '↓' : ''}
                      </Table.Th>
                      <Table.Th onClick={() => sortData('email')}>
                        Email {sortOrder.email === 'asc' ? '↑' : sortOrder.email === 'desc' ? '↓' : ''}
                      </Table.Th>
                      <Table.Th onClick={() => sortData('username')}>
                        Username {sortOrder.username === 'asc' ? '↑' : sortOrder.username === 'desc' ? '↓' : ''}
                      </Table.Th>
                      <Table.Th>Roles</Table.Th>
                      <Table.Th>Last Login</Table.Th>
                      <Table.Th>Status</Table.Th>
                    </Table.Tr>
                  </Table.Thead>
                  <Table.Tbody>
                    {nurses.map((nurse) => (
                      <Table.Tr key={nurse.id}>
                        <Table.Td>{nurse.name}</Table.Td>
                        <Table.Td>{nurse.email}</Table.Td>
                        <Table.Td>{nurse.username}</Table.Td>
                        <Table.Td>{nurse.roles}</Table.Td>
                        <Table.Td>{nurse.lastLogin}</Table.Td>
                        <Table.Td>{nurse.status}</Table.Td>
                      </Table.Tr>
                    ))}
                  </Table.Tbody>
                </Table>
            </ScrollArea>
          </Tabs.Panel>

          {/* Nurse Pool Tab */}
          <Tabs.Panel value="nursePool" pt="xs">
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '15px' }}>
              <Button color="red">ADD NURSE POOL</Button>
            </div>

            <ScrollArea style={{ width: '100%' }}>
               <Text size="lg" fw={700} mb="md">
                Nurse Pool <span style={{ color: "grey" }}>(10 Times)</span>
              </Text>
              
                <Table highlightOnHover striped withBorder>
                  <Table.Thead>
                    <Table.Tr>
                      <Table.Th onClick={() => sortPoolData('name')}>
                        Nurse Pool Name {sortOrder.name === 'asc' ? '↑' : sortOrder.name === 'desc' ? '↓' : ''}
                      </Table.Th>
                      <Table.Th onClick={() => sortPoolData('members')}>
                        Members {sortOrder.members === 'asc' ? '↑' : sortOrder.members === 'desc' ? '↓' : ''}
                      </Table.Th>
                      <Table.Th>Last Login</Table.Th>
                      <Table.Th>Patients</Table.Th>
                      <Table.Th>Description</Table.Th>
                      <Table.Th>Status</Table.Th>
                    </Table.Tr>
                  </Table.Thead>
                  <Table.Tbody>
                    {nursePools.map((pool) => (
                      <Table.Tr key={pool.id}>
                        <Table.Td>{pool.name}</Table.Td>
                        <Table.Td>{pool.members}</Table.Td>
                        <Table.Td>{pool.lastLogin}</Table.Td>
                        <Table.Td>{pool.patients}</Table.Td>
                        <Table.Td>{pool.description}</Table.Td>
                        <Table.Td>{pool.status}</Table.Td>
                      </Table.Tr>
                    ))}
                  </Table.Tbody>
                </Table>
            </ScrollArea>
          </Tabs.Panel>
        </Tabs>
        </div>
      </AppShell.Main>

      {/* Add Nurse Modal */}
      <Modal opened={modalOpen} onClose={() => setModalOpen(false)} title="Create New Nurse" centered>
        <TextInput label="Name" name="name" value={newNurse.name} onChange={handleInputChangeNurse} required />
        <TextInput label="Email" name="email" value={newNurse.email} onChange={handleInputChangeNurse} required />
        <TextInput label="Username" name="username" value={newNurse.username} onChange={handleInputChangeNurse} required />
        <TextInput label="Roles" name="roles" value={newNurse.roles} onChange={handleInputChangeNurse} />
        <TextInput label="Last Login" name="lastLogin" value={newNurse.lastLogin} onChange={handleInputChangeNurse} />
        <TextInput label="Status" name="status" value={newNurse.status} onChange={handleInputChangeNurse} />

        <Group position="right" mt="md">
          <Button variant="filled" color="blue" onClick={addNurse}>Add Nurse</Button>
        </Group>
      </Modal>

      {/* Add Nurse Pool Modal */}
      <Modal opened={modalOpen} onClose={() => setModalOpen(false)} title="Create New Nurse Pool" centered>
        <TextInput label="Nurse Pool Name" name="name" value={newNursePool.name} onChange={handleInputChangeNursePool} required />
        <TextInput label="Members" name="members" value={newNursePool.members} onChange={handleInputChangeNursePool} />
        <TextInput label="Last Login" name="lastLogin" value={newNursePool.lastLogin} onChange={handleInputChangeNursePool} />
        <TextInput label="Patients" name="patients" value={newNursePool.patients} onChange={handleInputChangeNursePool} />
        <TextInput label="Description" name="description" value={newNursePool.description} onChange={handleInputChangeNursePool} />
        <TextInput label="Status" name="status" value={newNursePool.status} onChange={handleInputChangeNursePool} />

        <Group position="right" mt="md">
          <Button variant="filled" color="blue" onClick={addNursePool}>Add Nurse Pool</Button>
        </Group>
      </Modal>
    </AppShell>
  );
};

export default Nurses;
