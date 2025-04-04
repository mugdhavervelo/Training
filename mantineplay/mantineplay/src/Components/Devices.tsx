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


const initialDevices = {
  newDevices: [
    { id: 1, name: 'Device A', deviceId: 'A123', serialId: 'S123', description: 'New device for testing', status: 'Active' },
    { id: 2, name: 'Device B', deviceId: 'B123', serialId: 'S124', description: 'New monitoring device', status: 'Active' },
  ],
  assignedDevices: [
    { id: 3, name: 'Device C', deviceId: 'C123', serialId: 'S125', patients: 10, description: 'Assigned to patients', status: 'Assigned' },
    { id: 4, name: 'Device D', deviceId: 'D123', serialId: 'S126', patients: 8, description: 'Assigned to ICU', status: 'Assigned' },
  ],
  deactivatedDevices: [
    { id: 5, name: 'Device E', deviceId: 'E123', serialId: 'S127', description: 'Deactivated device', status: 'Inactive' },
    { id: 6, name: 'Device F', deviceId: 'F123', serialId: 'S128', description: 'Deactivated sensor', status: 'Inactive' },
  ]
};

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

const Devices = () => {
  const [opened, setOpened] = useState(true);
  const [newDeviceModalOpen, setNewDeviceModalOpen] = useState(false);
  const [assignedDeviceModalOpen, setAssignedDeviceModalOpen] = useState(false);
  const [deactivatedDeviceModalOpen, setDeactivatedDeviceModalOpen] = useState(false);
  const [newDevice, setNewDevice] = useState({ name: '', deviceId: '', serialId: '', description: '', status: '' });
  const [assignedDevice, setAssignedDevice] = useState({ name: '', deviceId: '', serialId: '', patients: '', description: '', status: '' });
  const [deactivatedDevice, setDeactivatedDevice] = useState({ name: '', deviceId: '', serialId: '', description: '', status: '' });
  
  const [devices, setDevices] =  useState(initialDevices.newDevices);
  const [assignedDevices, setAssignedDevices] = useState(initialDevices.assignedDevices);
  const [deactivatedDevices, setDeactivatedDevices] = useState(initialDevices.deactivatedDevices);
  const [sortOrder, setSortOrder] = useState<{ [key: string]: 'asc' | 'desc' }>({});

  const handleInputChangeNewDevice = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewDevice({ ...newDevice, [e.target.name]: e.target.value });
  };

  const handleInputChangeAssignedDevice = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAssignedDevice({ ...assignedDevice, [e.target.name]: e.target.value });
  };

  const handleInputChangeDeactivatedDevice = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDeactivatedDevice({ ...deactivatedDevice, [e.target.name]: e.target.value });
  };

  const addNewDevice = () => {
    if (!newDevice.name || !newDevice.deviceId) return;
    const newId = devices.length > 0 ? devices[devices.length - 1].id + 1 : 1;
    setDevices([...devices, { id: newId, ...newDevice }]);
    setNewDeviceModalOpen(false);
    setNewDevice({ name: '', deviceId: '', serialId: '', description: '', status: '' });
  };

  const addAssignedDevice = () => {
    if (!assignedDevice.name || !assignedDevice.deviceId) return;
    const newId = assignedDevices.length > 0 ? assignedDevices[assignedDevices.length - 1].id + 1 : 1;
    setAssignedDevices([...assignedDevices, { id: newId, ...assignedDevice }]);
    setAssignedDeviceModalOpen(false);
    setAssignedDevice({ name: '', deviceId: '', serialId: '', patients: '', description: '', status: '' });
  };

  const addDeactivatedDevice = () => {
    if (!deactivatedDevice.name || !deactivatedDevice.deviceId) return;
    const newId = deactivatedDevices.length > 0 ? deactivatedDevices[deactivatedDevices.length - 1].id + 1 : 1;
    setDeactivatedDevices([...deactivatedDevices, { id: newId, ...deactivatedDevice }]);
    setDeactivatedDeviceModalOpen(false);
    setDeactivatedDevice({ name: '', deviceId: '', serialId: '', description: '', status: '' });
  };

  const sortData = (column: string, tab: string) => {
    const order = sortOrder[column] === 'asc' ? 'desc' : 'asc';
    setSortOrder({ [column]: order });

    if (tab === 'new') {
      const sortedData = [...devices].sort((a, b) => {
        if (a[column] < b[column]) return order === 'asc' ? -1 : 1;
        if (a[column] > b[column]) return order === 'asc' ? 1 : -1;
        return 0;
      });
      setDevices(sortedData);
    } else if (tab === 'assigned') {
      const sortedData = [...assignedDevices].sort((a, b) => {
        if (a[column] < b[column]) return order === 'asc' ? -1 : 1;
        if (a[column] > b[column]) return order === 'asc' ? 1 : -1;
        return 0;
      });
      setAssignedDevices(sortedData);
    } else {
      const sortedData = [...deactivatedDevices].sort((a, b) => {
        if (a[column] < b[column]) return order === 'asc' ? -1 : 1;
        if (a[column] > b[column]) return order === 'asc' ? 1 : -1;
        return 0;
      });
      setDeactivatedDevices(sortedData);
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
        <Tabs color="teal" defaultValue="new">
          <Tabs.List>
            <Tabs.Tab value="new">New</Tabs.Tab>
            <Tabs.Tab value="assigned" color="green">Assigned</Tabs.Tab>
            <Tabs.Tab value="deactivated" color="red">Deactivated</Tabs.Tab>
          </Tabs.List>

          {/* New Tab */}
          <Tabs.Panel value="new" pt="xs">
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '15px' }}>
              <Button color="red">ADD DEVICE</Button>
              <hr style={{ margin: '10px 0', border: '1px solid #ddd' }} />
            </div>
            <ScrollArea style={{ width: '100%' }}>
             <Text size="lg" fw={700} mb="md">
                            DEVICES <span style={{ color: "grey" }}>(4 Times)</span>
                          </Text>
                <Table highlightOnHover striped withBorder>
                  <Table.Thead>
                    <Table.Tr>
                      <Table.Th onClick={() => sortData('name', 'new')}>Name</Table.Th>
                      <Table.Th onClick={() => sortData('deviceId', 'new')}>Device ID</Table.Th>
                      <Table.Th>Serial ID</Table.Th>
                      <Table.Th>Description</Table.Th>
                      <Table.Th>Status</Table.Th>
                    </Table.Tr>
                  </Table.Thead>
                  <Table.Tbody>
                    {devices.map((device) => (
                      <Table.Tr key={device.id}>
                        <Table.Td>{device.name}</Table.Td>
                        <Table.Td>{device.deviceId}</Table.Td>
                        <Table.Td>{device.serialId}</Table.Td>
                        <Table.Td>{device.description}</Table.Td>
                        <Table.Td>{device.status}</Table.Td>
                      </Table.Tr>
                    ))}
                  </Table.Tbody>
                </Table>

            </ScrollArea>
          </Tabs.Panel>

          {/* Assigned Tab */}
          <Tabs.Panel value="assigned" pt="xs">
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '15px' }}>
              <Button color="red">ADD DEVICE</Button>
            </div>
            <ScrollArea style={{ width: '100%' }}>
              <Text size="lg" fw={700} mb="md">
                              DEVICES <span style={{ color: "grey" }}>(4 Times)</span>
                            </Text>
              
                <Table highlightOnHover striped withBorder>
                  <Table.Thead>
                    <Table.Tr>
                      <Table.Th onClick={() => sortData('name', 'assigned')}>Name</Table.Th>
                      <Table.Th onClick={() => sortData('deviceId', 'assigned')}>Device ID</Table.Th>
                      <Table.Th>Serial ID</Table.Th>
                      <Table.Th>Patients</Table.Th>
                      <Table.Th>Description</Table.Th>
                      <Table.Th>Status</Table.Th>
                    </Table.Tr>
                  </Table.Thead>
                  <Table.Tbody>
                    {assignedDevices.map((device) => (
                      <Table.Tr key={device.id}>
                        <Table.Td>{device.name}</Table.Td>
                        <Table.Td>{device.deviceId}</Table.Td>
                        <Table.Td>{device.serialId}</Table.Td>
                        <Table.Td>{device.patients}</Table.Td>
                        <Table.Td>{device.description}</Table.Td>
                        <Table.Td>{device.status}</Table.Td>
                      </Table.Tr>
                    ))}
                  </Table.Tbody>
                </Table>
            </ScrollArea>
          </Tabs.Panel>

          {/* Deactivated Tab */}
          <Tabs.Panel value="deactivated" pt="xs">
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '15px' }}>
              <Button color="red">ADD DEVICE</Button>
            </div>
            <ScrollArea style={{ width: '100%' }}>
              <Text size="lg" fw={700} mb="md">
                              DEVICES <span style={{ color: "grey" }}>(2 Times)</span>
                            </Text>
                <Table highlightOnHover striped withBorder>
                  <Table.Thead>
                    <Table.Tr>
                      <Table.Th onClick={() => sortData('name', 'deactivated')}>Name</Table.Th>
                      <Table.Th onClick={() => sortData('deviceId', 'deactivated')}>Device ID</Table.Th>
                      <Table.Th>Serial ID</Table.Th>
                      <Table.Th>Description</Table.Th>
                      <Table.Th>Status</Table.Th>
                    </Table.Tr>
                  </Table.Thead>
                  <Table.Tbody>
                    {deactivatedDevices.map((device) => (
                      <Table.Tr key={device.id}>
                        <Table.Td>{device.name}</Table.Td>
                        <Table.Td>{device.deviceId}</Table.Td>
                        <Table.Td>{device.serialId}</Table.Td>
                        <Table.Td>{device.description}</Table.Td>
                        <Table.Td>{device.status}</Table.Td>
                      </Table.Tr>
                    ))}
                  </Table.Tbody>
                </Table>

            </ScrollArea>
          </Tabs.Panel>
        </Tabs>
        </div>
      </AppShell.Main>

      {/* Modals */}
      {/* New Device Modal */}
      <Modal opened={newDeviceModalOpen} onClose={() => setNewDeviceModalOpen(false)} title="Add New Device">
        <TextInput label="Device Name" name="name" value={newDevice.name} onChange={handleInputChangeNewDevice} />
        <TextInput label="Device ID" name="deviceId" value={newDevice.deviceId} onChange={handleInputChangeNewDevice} />
        <TextInput label="Serial ID" name="serialId" value={newDevice.serialId} onChange={handleInputChangeNewDevice} />
        <TextInput label="Description" name="description" value={newDevice.description} onChange={handleInputChangeNewDevice} />
        <TextInput label="Status" name="status" value={newDevice.status} onChange={handleInputChangeNewDevice} />
        <Group position="right" mt="md">
          <Button onClick={addNewDevice}>Add Device</Button>
        </Group>
      </Modal>

      {/* Assigned Device Modal */}
      <Modal opened={assignedDeviceModalOpen} onClose={() => setAssignedDeviceModalOpen(false)} title="Assign Device">
        <TextInput label="Device Name" name="name" value={assignedDevice.name} onChange={handleInputChangeAssignedDevice} />
        <TextInput label="Device ID" name="deviceId" value={assignedDevice.deviceId} onChange={handleInputChangeAssignedDevice} />
        <TextInput label="Serial ID" name="serialId" value={assignedDevice.serialId} onChange={handleInputChangeAssignedDevice} />
        <TextInput label="Patients" name="patients" value={assignedDevice.patients} onChange={handleInputChangeAssignedDevice} />
        <TextInput label="Description" name="description" value={assignedDevice.description} onChange={handleInputChangeAssignedDevice} />
        <TextInput label="Status" name="status" value={assignedDevice.status} onChange={handleInputChangeAssignedDevice} />
        <Group position="right" mt="md">
          <Button onClick={addAssignedDevice}>Assign Device</Button>
        </Group>
      </Modal>

      {/* Deactivated Device Modal */}
      <Modal opened={deactivatedDeviceModalOpen} onClose={() => setDeactivatedDeviceModalOpen(false)} title="Deactivate Device">
        <TextInput label="Device Name" name="name" value={deactivatedDevice.name} onChange={handleInputChangeDeactivatedDevice} />
        <TextInput label="Device ID" name="deviceId" value={deactivatedDevice.deviceId} onChange={handleInputChangeDeactivatedDevice} />
        <TextInput label="Serial ID" name="serialId" value={deactivatedDevice.serialId} onChange={handleInputChangeDeactivatedDevice} />
        <TextInput label="Description" name="description" value={deactivatedDevice.description} onChange={handleInputChangeDeactivatedDevice} />
        <TextInput label="Status" name="status" value={deactivatedDevice.status} onChange={handleInputChangeDeactivatedDevice} />
        <Group position="right" mt="md">
          <Button onClick={addDeactivatedDevice}>Deactivate Device</Button>
        </Group>
      </Modal>
    </AppShell>
  );
};

export default Devices;
