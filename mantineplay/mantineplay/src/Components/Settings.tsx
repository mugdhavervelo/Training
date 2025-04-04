import React, { useState } from 'react';
import { AppShell, Burger, Button, Table, ScrollArea, Tabs, Select, Group } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Link } from 'react-router-dom';
import { Checkbox } from '@mantine/core';
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

// Sample Provider Data
const initialProviders = [
  { id: 1, providerType: 'MD', firstName: 'Lucas', lastName: 'Barnes', schedulingName: 'Lucas001B', speciality: 'Dental Care', department: 'Admin' },
  { id: 2, providerType: 'MD', firstName: 'Monica', lastName: 'Thomas', schedulingName: 'Tmonica', speciality: 'Allergy/Immunology', department: 'Admin' },
  { id: 3, providerType: 'MD', firstName: 'Raymond', lastName: 'Pena', schedulingName: 'RayPena10', speciality: 'Allergy/Immunology', department: 'Admin' },
  { id: 4, providerType: 'MD', firstName: 'Jillian', lastName: 'Reed', schedulingName: 'Jil007reed', speciality: 'Maternity', department: 'Admin' },
  { id: 5, providerType: 'Nurse Practitioner', firstName: 'Julia', lastName: 'Nunez', schedulingName: 'NuneZ', speciality: 'Surgeon', department: 'Admin' },
  { id: 6, providerType: 'MD', firstName: 'Jeffrey', lastName: 'Castillo', schedulingName: 'JeffreyC', speciality: 'Allergy/Immunology', department: 'Admin' },
  { id: 7, providerType: 'MD', firstName: 'Jacob', lastName: 'Nichols', schedulingName: 'NicholsJac', speciality: 'Allergy/Immunology', department: 'Admin' },
];

const Settings = () => {
  const [opened, { toggle }] = useDisclosure(false);
  const [providers, setProviders] = useState(initialProviders);
  const [selectedEHR, setSelectedEHR] = useState<string | null>(null);
  const [practiceId, setPracticeId] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState<string | null>(null);

  const getDepartments = async () => {
    // Simulating API call to get departments
    console.log('Getting departments for practice:', practiceId);
  };

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 200,
        breakpoint: 'sm',
        collapsed: { mobile: !opened, desktop: !opened },
      }}
      padding="md"
      styles={{
        root: {
          display: 'flex',
          width: '100vw',
          height: '100vh',
        },
        main: {
          flexGrow: 1,
          transition: 'margin-left 0.3s ease',
          marginLeft: opened ? 200 : 0,
          width: `calc(100vw - ${opened ? 200 : 0}px)`,
        },
      }}
    >
      {/* Header */}
      <AppShell.Header p="md" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        <Button onClick={toggle}>{opened ? 'Collapse Sidebar' : 'Expand Sidebar'}</Button>
        <div>Logo</div>
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
      <AppShell.Main style={{ padding: '20px', marginTop: '50px' }}>
        <Tabs defaultValue="EHR">
          <Tabs.List>
            <Tabs.Tab value="EHR">EHR</Tabs.Tab>
            <Tabs.Tab value="Notification">Notification</Tabs.Tab>
            <Tabs.Tab value="Profile">Profile</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="EHR" pt="xs">
            <Group spacing="md" style={{ marginTop: '20px' }}>
              <Select
                label="EHR Provider"
                placeholder="Select EHR Provider"
                value={selectedEHR}
                onChange={setSelectedEHR}
                data={[
                  { value: 'provider1', label: 'Provider 1' },
                  { value: 'provider2', label: 'Provider 2' },
                ]}
                style={{ width: '300px' }}
                required
              />

              <Select
                label="Practice ID"
                placeholder="Enter Practice ID"
                value={practiceId}
                onChange={setPracticeId}
                data={[
                  { value: 'practice1', label: 'Practice 1' },
                  { value: 'practice2', label: 'Practice 2' },
                ]}
                style={{ width: '300px' }}
                required
              />

              <Button 
                color="red" 
                style={{ marginTop: '24px' }}
                onClick={getDepartments}
              >
                GET DEPARTMENT
              </Button>
            </Group>

            <Select
              label="Department"
              placeholder="Select Department"
              value={selectedDepartment}
              onChange={setSelectedDepartment}
              data={[
                { value: 'dept1', label: 'Department 1' },
                { value: 'dept2', label: 'Department 2' },
              ]}
              style={{ width: '100%', marginTop: '20px' }}
              required
            />

            <Button 
              color="red"
              style={{ marginTop: '20px', float: 'right' }}
            >
              SAVE
            </Button>

            {/* Providers Table */}
            <ScrollArea style={{ width: '100%', marginTop: '80px' }}>
              <Table highlightOnHover striped withBorder>
                <Table.Thead>
                  <Table.Tr>
                    <Table.Th>Provider Type</Table.Th>
                    <Table.Th>First Name</Table.Th>
                    <Table.Th>Last Name</Table.Th>
                    <Table.Th>Scheduling Name</Table.Th>
                    <Table.Th>Speciality</Table.Th>
                    <Table.Th>Department</Table.Th>
                    <Table.Th>Action</Table.Th>
                  </Table.Tr>
                </Table.Thead>

                <Table.Tbody>
                  {providers.map((provider) => (
                    <Table.Tr key={provider.id}>
                      <Table.Td>{provider.providerType}</Table.Td>
                      <Table.Td>{provider.firstName}</Table.Td>
                      <Table.Td>{provider.lastName}</Table.Td>
                      <Table.Td>{provider.schedulingName}</Table.Td>
                      <Table.Td>{provider.speciality}</Table.Td>
                      <Table.Td>{provider.department}</Table.Td>
                      <Table.Td>
                        <Button variant="filled" color="green" size="xs">
                          Create
                        </Button>
                      </Table.Td>
                    </Table.Tr>
                  ))}
                </Table.Tbody>
              </Table>

              <div style={{ marginTop: '20px', color: '#666' }}>
                Showing 1 to 7 of 10 entries
              </div>
            </ScrollArea>
          </Tabs.Panel>

          <Tabs.Panel value="Notification" pt="xs">
  <Group direction="column" spacing="lg" style={{ marginTop: '20px' }}>
    <div>
      <h3>Notifications</h3>
      <p>Select the notification categories and communication methods</p>
    </div>

    {/* Notification Settings Table */}
    <Table highlightOnHover striped withBorder>
      <thead>
        <tr>
          <th>Category</th>
          <th>Type</th>
          <th>Text</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Appointment</td>
          <td>Reminder</td>
          <td>
            <Checkbox label="Enable" />
          </td>
          <td>
            <Checkbox label="Enable" />
          </td>
        </tr>
        <tr>
          <td>Alert</td>
          <td>Confirmation</td>
          <td>
            <Checkbox label="Enable" />
          </td>
          <td>
            <Checkbox label="Enable" />
          </td>
        </tr>
        <tr>
          <td>Billing</td>
          <td>Cancellation</td>
          <td>
            <Checkbox label="Enable" />
          </td>
          <td>
            <Checkbox label="Enable" />
          </td>
        </tr>
        {/* Add more rows as needed */}
      </tbody>
    </Table>

    {/* Save Button */}
    <Button color="red" style={{ marginTop: '24px' }}>
      SAVE NOTIFICATIONS SETTINGS
    </Button>
  </Group>
</Tabs.Panel>




          <Tabs.Panel value="Profile" pt="xs">
            {/* Add Profile settings content here */}
            <div>Profile Settings Content</div>
          </Tabs.Panel>
        </Tabs>
      </AppShell.Main>
    </AppShell>
  );
};

export default Settings;