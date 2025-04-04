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

// Sample Provider Data and Pools (same as before)
// Sample initial data for providers and provider pools
const initialProviders = [
  { id: 1, name: 'Dr. John Doe', speciality: 'Cardiology', email: 'john.doe@example.com', status: 'Active' },
  { id: 2, name: 'Dr. Jane Smith', speciality: 'Neurology', email: 'jane.smith@example.com', status: 'Active' },
  { id: 3, name: 'Dr. Alice Johnson', speciality: 'Orthopedics', email: 'alice.johnson@example.com', status: 'Inactive' },
  { id: 4, name: 'Dr. Bob Brown', speciality: 'Pediatrics', email: 'bob.brown@example.com', status: 'Active' },
  { id: 5, name: 'Dr. Charlie White', speciality: 'Dermatology', email: 'charlie.white@example.com', status: 'Inactive' },
  { id: 6, name: 'Dr. Daisy Green', speciality: 'Radiology', email: 'daisy.green@example.com', status: 'Active' },
  { id: 7, name: 'Dr. Ethan Blue', speciality: 'Oncology', email: 'ethan.blue@example.com', status: 'Active' },
  { id: 8, name: 'Dr. Fiona Black', speciality: 'Psychiatry', email: 'fiona.black@example.com', status: 'Inactive' },
  { id: 9, name: 'Dr. George Gray', speciality: 'Gastroenterology', email: 'george.gray@example.com', status: 'Active' },
  { id: 10, name: 'Dr. Hannah Brown', speciality: 'Endocrinology', email: 'hannah.brown@example.com', status: 'Inactive' }
];

const initialProviderPools = [
  { id: 1, name: 'Cardiology Pool', members: 5, speciality: 'Cardiology', patients: 20, description: 'Cardiology specialists pool', status: 'Active' },
  { id: 2, name: 'Neurology Pool', members: 4, speciality: 'Neurology', patients: 15, description: 'Neurology specialists pool', status: 'Active' },
  { id: 3, name: 'Orthopedics Pool', members: 3, speciality: 'Orthopedics', patients: 12, description: 'Orthopedics specialists pool', status: 'Inactive' },
  { id: 4, name: 'Pediatrics Pool', members: 6, speciality: 'Pediatrics', patients: 25, description: 'Pediatrics specialists pool', status: 'Active' },
  { id: 5, name: 'Dermatology Pool', members: 4, speciality: 'Dermatology', patients: 18, description: 'Dermatology specialists pool', status: 'Inactive' }
];



const Providers = () => {
  const [opened, setOpened] = useState(true);
  const [providers, setProviders] = useState(initialProviders);
  const [providerPools, setProviderPools] = useState(initialProviderPools);
  const [modalOpen, setModalOpen] = useState(false);
  const [newProvider, setNewProvider] = useState({ name: '', speciality: '', email: '', status: '' });
  const [newProviderPool, setNewProviderPool] = useState({ name: '', members: '', speciality: '', patients: '', description: '', status: '' });



  const handleInputChangeProvider = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewProvider({ ...newProvider, [e.target.name]: e.target.value });
  };

  const handleInputChangeProviderPool = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewProviderPool({ ...newProviderPool, [e.target.name]: e.target.value });
  };

  const addProvider = () => {
    if (!newProvider.name || !newProvider.speciality || !newProvider.email) return;
    const newId = providers.length > 0 ? providers[providers.length - 1].id + 1 : 1;
    setProviders([...providers, { id: newId, ...newProvider }]);
    setModalOpen(false);
    setNewProvider({ name: '', speciality: '', email: '', status: '' });
  };

  const addProviderPool = () => {
    if (!newProviderPool.name || !newProviderPool.speciality) return;
    const newId = providerPools.length > 0 ? providerPools[providerPools.length - 1].id + 1 : 1;
    setProviderPools([...providerPools, { id: newId, ...newProviderPool }]);
    setModalOpen(false);
    setNewProviderPool({ name: '', members: '', speciality: '', patients: '', description: '', status: '' });
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

        
        
        <Tabs color="teal" defaultValue="provider">
          <Tabs.List>
            <Tabs.Tab value="provider">Provider</Tabs.Tab>
            <Tabs.Tab value="providerPool" color="green">
              Provider Pool
            </Tabs.Tab>
          </Tabs.List>

          {/* Provider Tab */}
          <Tabs.Panel value="provider" pt="xs">
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '15px' }}>
              <Button style={{ backgroundColor: "red", color: "white" }} >
                                ADD PROVIDER
                              </Button>
              <hr style={{ margin: '10px 0', border: '1px solid #ddd' }} />
            </div>

            <ScrollArea style={{ width: '100%' }}>
              {/* Outer Box with shadow */}
              <Text size="lg" fw={500} mb="md" >
  Providers <span style={{ color: "grey" }}>(4 Times)</span>
</Text>

<Table highlightOnHover striped withBorder>
  <Table.Thead>
    <Table.Tr>
      <Table.Th>Provider Name</Table.Th>
      <Table.Th>Speciality</Table.Th>
      <Table.Th>Email Id</Table.Th>
      <Table.Th>Status</Table.Th>
    </Table.Tr>
  </Table.Thead>
                <Table.Tbody>
                    {providers.map((provider) => (
                      <Table.Tr key={provider.id}>
                        <Table.Td>{provider.name}</Table.Td>
                        <Table.Td>{provider.speciality}</Table.Td>
                        <Table.Td>{provider.speciality}</Table.Td>
                        <Table.Td>{provider.email}</Table.Td>
                        <Table.Td>{provider.status}</Table.Td>
                      </Table.Tr>
                    ))}
                  </Table.Tbody>
                </Table>
            </ScrollArea>
          </Tabs.Panel>

          {/* Provider Pool Tab */}
          <Tabs.Panel value="providerPool" pt="xs">
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '15px' }}>
             <Button style={{ backgroundColor: "red", color: "white" }} >
                               ADD PROVIDER POOL
                             </Button>
            </div>
            

            <ScrollArea style={{ width: '100%' }}>
              {/* Outer Box with shadow */}
              
      <Text size="lg" fw={500} mb="md">
  Provider Pool <span style={{ color: "grey" }}>(4 Times)</span>
</Text>

<Table highlightOnHover striped withBorder>
  <Table.Thead>
    <Table.Tr>
      <Table.Th>Provider Pool Name</Table.Th>
      <Table.Th>Members</Table.Th>
      <Table.Th>Speciality</Table.Th>
      <Table.Th>Patients</Table.Th>
      <Table.Th>Description</Table.Th>
      <Table.Th>Status</Table.Th>
    </Table.Tr>
  </Table.Thead>
  <Table.Tbody>
    {/* Table rows go here */}
  </Table.Tbody>
  <Table.Tbody>
                    {providerPools.map((pool) => (
                      <Table.Tr key={pool.id}>
                        <Table.Td>{pool.name}</Table.Td>
                        <Table.Td>{pool.members}</Table.Td>
                        <Table.Td>{pool.speciality}</Table.Td>
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

      {/* Add Provider Modal */}
      <Modal opened={modalOpen} onClose={() => setModalOpen(false)} title="Create New Provider" centered>
        <TextInput label="Provider Name" name="name" value={newProvider.name} onChange={handleInputChangeProvider} required />
        <TextInput label="Speciality" name="speciality" value={newProvider.speciality} onChange={handleInputChangeProvider} required />
        <TextInput label="Email ID" name="email" value={newProvider.email} onChange={handleInputChangeProvider} required />
        <TextInput label="Status" name="status" value={newProvider.status} onChange={handleInputChangeProvider} />

        <Group position="right" mt="md">
          <Button variant="filled" color="blue" onClick={addProvider}>Add Provider</Button>
        </Group>
      </Modal>

      {/* Add Provider Pool Modal */}
      <Modal opened={modalOpen} onClose={() => setModalOpen(false)} title="Create New Provider Pool" centered>
        <TextInput label="Provider Pool Name" name="name" value={newProviderPool.name} onChange={handleInputChangeProviderPool} required />
        <TextInput label="Members" name="members" value={newProviderPool.members} onChange={handleInputChangeProviderPool} />
        <TextInput label="Speciality" name="speciality" value={newProviderPool.speciality} onChange={handleInputChangeProviderPool} required />
        <TextInput label="Patients" name="patients" value={newProviderPool.patients} onChange={handleInputChangeProviderPool} />
        <TextInput label="Description" name="description" value={newProviderPool.description} onChange={handleInputChangeProviderPool} />
        <TextInput label="Status" name="status" value={newProviderPool.status} onChange={handleInputChangeProviderPool} />

        <Group position="right" mt="md">
          <Button style={{ backgroundColor: "red", color: "white" }} >
                            ADD PROVIDER POOL
                          </Button>
        </Group>
      </Modal>
    </AppShell>
  );
};

export default Providers;
