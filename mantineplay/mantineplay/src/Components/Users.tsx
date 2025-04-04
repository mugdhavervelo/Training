import React, { useState } from 'react';
import {
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
// Sample User Data
const initialUsers = [
  { id: 101, name: 'John Doe', email: 'john.doe@example.com', phone: '123-456-7890', role: 'Admin' },
  { id: 102, name: 'Jane Smith', email: 'jane.smith@example.com', phone: '234-567-8901', role: 'User' },
  { id: 103, name: 'Alice Johnson', email: 'alice.johnson@example.com', phone: '345-678-9012', role: 'Manager' },
  { id: 104, name: 'Bob Brown', email: 'bob.brown@example.com', phone: '456-789-0123', role: 'User' },
  { id: 105, name: 'Charlie White', email: 'charlie.white@example.com', phone: '567-890-1234', role: 'Admin' },
  { id: 106, name: 'Daisy Green', email: 'daisy.green@example.com', phone: '678-901-2345', role: 'Manager' },
  { id: 107, name: 'Ethan Blue', email: 'ethan.blue@example.com', phone: '789-012-3456', role: 'User' },
  { id: 108, name: 'Fiona Black', email: 'fiona.black@example.com', phone: '890-123-4567', role: 'Admin' }
];

const Users = () => {
  const [opened, setOpened] = useState(true);
  const [users, setUsers] = useState(initialUsers);
  const [sortAsc, setSortAsc] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [newUser, setNewUser] = useState({ name: '', email: '', phone: '', role: '' });

  // Sort by User ID
  const sortUsers = () => {
    const sortedUsers = [...users].sort((a, b) => (sortAsc ? a.id - b.id : b.id - a.id));
    setUsers(sortedUsers);
    setSortAsc(!sortAsc);
  };

  // Handle Input Change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  // Add New User
  const addUser = () => {
    if (!newUser.name || !newUser.email || !newUser.phone || !newUser.role) return;
    const newId = users.length > 0 ? users[users.length - 1].id + 1 : 101;
    setUsers([...users, { id: newId, ...newUser }]);
    setModalOpen(false);
    setNewUser({ name: '', email: '', phone: '', role: '' });
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
    
          {/* Navbar- Sidebar component */}
          
          
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
  <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '5px',borderRadius: '8px'  }}>
            
            </div>

            <Card shadow="sm" radius="md" p="md">
                        <Group justify="space-between" mb="md">
                          <Group>
                            
                          <Text>
              Users <span style={{ color: "grey" }}>(100 Times)</span>
            </Text>
                          </Group>
            
                          <Group>
                            
                            <Button color="red">Create User</Button>
                            <hr style={{ margin: '10px 0', border: '1px solid #ddd' }} />
                          </Group>

                          </Group>
                                      <hr style={{ 
                              margin: '10px 0', 
                              border: '1px solid #ddd', 
                              boxShadow: '0px 0.2px 0.2px rgba(57, 57, 57, 0.1)' 
                            }} />
                          
        {/* Add User Button */}
        {/* <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '15px', marginTop: '50px' }}>
          <Button variant="filled" color="blue" size="md" onClick={() => setModalOpen(true)}>
            Create User
          </Button>
        </div> */}

        {/* Table Wrapper */}
        <ScrollArea style={{ width: '100%' }}>
          <Table highlightOnHover striped withBorder>
            <Table.Thead>
              <Table.Tr>
                <Table.Th onClick={sortUsers} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px' }}>
                  User ID {sortAsc ? <IconArrowUp size={14} /> : <IconArrowDown size={14} />}
                </Table.Th>
                <Table.Th> Name</Table.Th>
                <Table.Th> Email</Table.Th>
                <Table.Th> Phone</Table.Th>
                <Table.Th> Role</Table.Th>
                <Table.Th> Actions</Table.Th>
              </Table.Tr>
            </Table.Thead>

            {/* Horizontal Line Below Header */}
            <tr>
              <td colSpan={6}>
                <hr style={{ border: '1px solid gray', width: '100%' }} />
              </td>
            </tr>

            <Table.Tbody>
              {users.map((user) => (
                <Table.Tr key={user.id}>
                  <Table.Td>{user.id}</Table.Td>
                  <Table.Td>{user.name}</Table.Td>
                  <Table.Td>{user.email}</Table.Td>
                  <Table.Td>{user.phone}</Table.Td>
                  <Table.Td>{user.role}</Table.Td>
                  <Table.Td style={{ display: 'flex', gap: '8px' }}>
                    <Button variant="outline" color="blue" size="xs">Edit</Button>
                    <Button variant="outline" color="red" size="xs">Delete</Button>
                  </Table.Td>
                </Table.Tr>
              ))}
            </Table.Tbody>
          </Table>
        </ScrollArea>
        </Card>
        </div>
      </AppShell.Main>

      {/* Add User Modal */}
      <Modal opened={modalOpen} onClose={() => setModalOpen(false)} title="Create New User" centered>
        <TextInput label="Name" name="name" value={newUser.name} onChange={handleInputChange} required />
        <TextInput label="Email" name="email" value={newUser.email} onChange={handleInputChange} required />
        <TextInput label="Phone" name="phone" value={newUser.phone} onChange={handleInputChange} required />
        <TextInput label="Role" name="role" value={newUser.role} onChange={handleInputChange} required />

        <Group position="right" mt="md">
          <Button variant="filled" color="blue" onClick={addUser}>Add User</Button>
        </Group>
      </Modal>

    </AppShell>
  );
};

export default Users;