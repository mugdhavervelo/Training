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
// Sample Program Data
const initialPrograms = [
  { id: 1, title: 'Program A', description: 'Description of Program A', track: 'Track 1', action: 'Active' },
  { id: 2, title: 'Program B', description: 'Description of Program B', track: 'Track 2', action: 'Inactive' },
  { id: 3, title: 'Program C', description: 'Description of Program C', track: 'Track 3', action: 'Active' },
  // Add more programs as needed
];

const Programs = () => {
const [opened, setOpened] = useState(true);
  const [programs, setPrograms] = useState(initialPrograms);
  const [sortAsc, setSortAsc] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [newProgram, setNewProgram] = useState({ title: '', description: '', track: '', action: '' });

  // Sort by Program ID
  const sortPrograms = () => {
    const sortedPrograms = [...programs].sort((a, b) => (sortAsc ? a.id - b.id : b.id - a.id));
    setPrograms(sortedPrograms);
    setSortAsc(!sortAsc);
  };

  // Handle Input Change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewProgram({ ...newProgram, [e.target.name]: e.target.value });
  };

  // Add New Program
  const addProgram = () => {
    if (!newProgram.title || !newProgram.description) return;
    const newId = programs.length > 0 ? programs[programs.length - 1].id + 1 : 1;
    setPrograms([...programs, { id: newId, ...newProgram }]);
    setModalOpen(false);
    setNewProgram({ title: '', description: '', track: '', action: '' });
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
      <AppShell.Main >

        {/* Add Program Button */}
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
          <Text>Program <span style={{ color: "grey" }}>(4 Times)</span></Text>
        </Group>
        <Group>
          <Button color="red">ADD PROGRAM</Button>
          <hr style={{ margin: '10px 0', border: '1px solid #ddd' }} />
        </Group>
      </Group>

  <hr
    style={{
      margin: "10px 0",
      border: "1px solid #ddd",
      boxShadow: "0px 0.2px 0.2px rgba(57, 57, 57, 0.1)",
    }}
  />
 {/* ✅ Properly closing the Card component here */}

            
            
          
     

        {/* Programs Table */}
        {/* <h2>Programs</h2>
        <p>Manage the programs and their details, including track and action status.</p> */}

        <ScrollArea style={{ width: '100%' }}>
          <Table highlightOnHover striped withBorder>
            <Table.Thead>
              <Table.Tr>
                <Table.Th onClick={sortPrograms} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px' }}>
                  Program ID {sortAsc ? <IconArrowUp size={14} /> : <IconArrowDown size={14} />}
                </Table.Th>
                <Table.Th>Program Title</Table.Th>
                <Table.Th>Description</Table.Th>
                <Table.Th>Track</Table.Th>
                <Table.Th>Action</Table.Th>
              </Table.Tr>
            </Table.Thead>

            {/* Horizontal Line Below Header */}
            <tr>
              <td colSpan={5}>
                <hr style={{ border: '1px solid gray', width: '100%' }} />
              </td>
            </tr>

            <Table.Tbody>
              {programs.map((program) => (
                <Table.Tr key={program.id}>
                  <Table.Td>{program.id}</Table.Td>
                  <Table.Td>{program.title}</Table.Td>
                  <Table.Td>{program.description}</Table.Td>
                  <Table.Td>{program.track}</Table.Td>
                  <Table.Td>{program.action}</Table.Td>
                </Table.Tr>
              ))}
            </Table.Tbody>
          </Table>
        </ScrollArea>
        </Card>
      </div>
      </AppShell.Main>

      {/* Add Program Modal */}
      <Modal opened={modalOpen} onClose={() => setModalOpen(false)} title="Create New Program" centered>
        <TextInput label="Title" name="title" value={newProgram.title} onChange={handleInputChange} required />
        <TextInput label="Description" name="description" value={newProgram.description} onChange={handleInputChange} required />
        <TextInput label="Track" name="track" value={newProgram.track} onChange={handleInputChange} />
        <TextInput label="Action" name="action" value={newProgram.action} onChange={handleInputChange} />

        <Group position="right" mt="md">
          <Button variant="filled" color="blue" onClick={addProgram}>Add Program</Button>
        </Group>
      </Modal>
    </AppShell>
  );
};

export default Programs;
