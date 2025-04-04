import React, { useState } from 'react';
import { AppShell, Checkbox, Card, Badge, Burger, Button, Table, ScrollArea, Modal, TextInput, Group,   Text, Menu} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Link } from 'react-router-dom';
import { IconArrowUp, IconArrowDown } from '@tabler/icons-react';
import { ActionIcon } from '@mantine/core';
import {
  IconBell,
  IconChevronLeft,
  IconChevronRight,
  IconChevronDown,
} from '@tabler/icons-react';
import dashboardIcon from "../images/dashboard.png";
import patientssvg from "../images/patients.svg";
import alertspng from "../images/alertq.svg";
import providerspng from "../images/providers.svg";
import nursespng from "../images/nurses.svg";
import devicesvg from "../images/devicess.svg";
import programpng from "../images/program.svg";
import userpng from "../images/users.svg";
import settingspng from "../images/settings.svg";
import signout from "../images/signout.svg";
import sidebarimg from "../images/Dashboard-2.png"

// Sample Alert Data
const initialAlerts = [
  { id: 1, dateTime: '2025-02-17 10:30 AM', message: 'Blood pressure, Above normal', type: 'Vitals', nurse: 'Alice Brown', status: 'Critical' },
  { id: 2, dateTime: '2025-02-17 11:15 AM', message: 'Temprature, Above normal', type: 'Vitals', nurse: 'Bob Green', status: 'Critical' },
  { id: 3, dateTime: '2025-02-17 12:00 PM', message: 'Blood pressure, Below normal', type: 'Vitals', nurse: 'Daisy White', status: 'Critical' },
];

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

const Alerts = () => {
  const [opened, setOpened] = useState(true);
  const [alerts, setAlerts] = useState(initialAlerts);
  const [sortAsc, setSortAsc] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [newAlert, setNewAlert] = useState({ dateTime: '', message: '', type: '', nurse: '', status: '' });

  // Sort Alerts by Date & Time
  const sortAlerts = () => {
    const sortedAlerts = [...alerts].sort((a, b) => (sortAsc ? new Date(a.dateTime) - new Date(b.dateTime) : new Date(b.dateTime) - new Date(a.dateTime)));
    setAlerts(sortedAlerts);
    setSortAsc(!sortAsc);
  };

  // Handle Input Change
  const handleInputChange = (e) => {
    setNewAlert({ ...newAlert, [e.target.name]: e.target.value });
  };

  // Add New Alert
  const addAlert = () => {
    if (!newAlert.message || !newAlert.type) return;
    const newId = alerts.length > 0 ? alerts[alerts.length - 1].id + 1 : 1;
    setAlerts([...alerts, { id: newId, ...newAlert }]);
    setModalOpen(false);
    setNewAlert({ dateTime: '', message: '', type: '', nurse: '', status: '' });
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
      
                <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '5px',borderRadius: '8px'  }}>
                  
                </div>
                
      
                <Card shadow="sm" radius="md" p="md">
                <Group justify="space-between" align="center">
  <Group>
    <Checkbox />
    <Text>
      Alerts <span style={{ color: "grey" }}>(3 Times)</span>
    </Text>
  </Group>

  <Group justify="flex-end">
  <Button 
  variant="outline" 
  style={{ 
    backgroundColor: "white", 
    color: "black", 
    border: "1px solid black", 
    fontWeight: "normal" 
  }}
  sx={{ "&:hover": { backgroundColor: "grey" } }}
>
  Abnormal
</Button>

<Button 
  variant="outline" 
  style={{ 
    backgroundColor: "white", 
    color: "black", 
    border: "1px solid black", 
    fontWeight: "normal" 
  }}
  sx={{ "&:hover": { backgroundColor: "grey" } }}
>
  Critical
</Button>

<Button 
  variant="outline" 
  style={{ 
    backgroundColor: "white", 
    color: "black", 
    border: "1px solid black", 
    fontWeight: "normal" 
  }}
  sx={{ "&:hover": { backgroundColor: "grey" } }}
>
  Normal
</Button>

  </Group>
</Group>


                    
                  
                  <hr style={{ 
          margin: '10px 0', 
          border: '1px solid #ddd', 
          boxShadow: '0px 0.2px 0.2px rgba(57, 57, 57, 0.1)' 
        }} />
      
                  <ScrollArea style={{ width: '100%' }}>
                    <Table highlightOnHover striped withBorder>
                      <Table.Thead>
                        <Table.Tr>
                        <Table.Th onClick={sortAlerts} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px' }}>
                  Date & Time {sortAsc ? <IconArrowUp size={14} /> : <IconArrowDown size={14} />}
                </Table.Th>
                <Table.Th>Alert Message</Table.Th>
                <Table.Th>Alert Type</Table.Th>
                <Table.Th>Nurse Assigned</Table.Th>
                <Table.Th>Status</Table.Th>
                <Table.Th>Action</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
                        {alerts.map((alert) => (
                          <Table.Tr key={alert.id}>
                          <Table.Td>{alert.dateTime}</Table.Td>
                          <Table.Td>{alert.message}</Table.Td>
                          <Table.Td>
  <Badge
    variant="filled"
    size="md"
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '129px',
      height: '30px',
      borderRadius: "5px",
      backgroundColor: alert.typet === 'Needs Attention' ? '#fba0a0' :
                      alert.type === 'No Vitals' ? '#fed09b' : 'gray',
    }}
  >
    {alert.type} {/* Ensure this correctly reflects the alert message */}
  </Badge>
</Table.Td>

<Table.Td>{alert.type}</Table.Td> {/* Ensure this correctly reflects the alert type */}

                          <Table.Td>{alert.nurse}</Table.Td>
                          <Table.Td>{alert.status}</Table.Td>
                          <Table.Td>
  <Menu>
    <Menu.Target>
    <Badge
    variant="filled"
    size="md"
    style={{
      color: "#494849",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "129px",
      height: "30px",
      borderRadius: "5px",
      backgroundColor: alert.type.toLowerCase() === "action" ? "#AAFFBE" : "#AAFFBE",
      cursor: "pointer",
      gap: "5px",
    }}
  >
    Action <IconChevronDown size={14} />
  </Badge>
    </Menu.Target>
    <Menu.Dropdown>
      <Menu.Item onClick={() => console.log("Reassign Alert")}>
        Reassign Alert
      </Menu.Item>
      <Menu.Item onClick={() => console.log("Resolved")}>Resolved</Menu.Item>
      <Menu.Item onClick={() => console.log("Add Notes")}>Add Notes</Menu.Item>
    </Menu.Dropdown>
  </Menu>
</Table.Td>
                          </Table.Tr>
                        ))}
                      </Table.Tbody>
                    </Table>
                  </ScrollArea>
                </Card>
              </div>
            </AppShell.Main>

      {/* Add Alert Modal */}
      <Modal opened={modalOpen} onClose={() => setModalOpen(false)} title="Create New Alert" centered>
        <TextInput label="Date & Time" name="dateTime" value={newAlert.dateTime} onChange={handleInputChange} required />
        <TextInput label="Message" name="message" value={newAlert.message} onChange={handleInputChange} required />
        <TextInput label="Type" name="type" value={newAlert.type} onChange={handleInputChange} required />
        <TextInput label="Nurse Assigned" name="nurse" value={newAlert.nurse} onChange={handleInputChange} />
        <TextInput label="Status" name="status" value={newAlert.status} onChange={handleInputChange} />

        <Group position="right" mt="md">
          <Button variant="filled" color="blue" onClick={addAlert}>Add Alert</Button>
        </Group>
      </Modal>
    </AppShell>
  );
};

export default Alerts;
