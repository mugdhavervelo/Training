
import React, { useState } from 'react';
import { createTheme, Card, Table, ScrollArea, Button, Modal, TextInput, Group, AppShell, Burger, px, ActionIcon, Text, Badge, Checkbox } from '@mantine/core';
import { IconHeartRateMonitor, IconUser, IconHospital, IconAlertTriangle, IconArrowUp, IconArrowDown, IconBell, IconChevronLeft, IconChevronRight, IconEdit, IconTrash } from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import { useDisclosure } from '@mantine/hooks';
import { IconChevronDown } from "@tabler/icons-react";
import dashboardIcon from "../images/dashboard1.svg";
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
import bellpng from "../images/bell.svg"
import arrow from "../images/downarrow.png"
import actionw from "../images/awrite.svg"
import actiond from "../images/adelete.svg"


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


const initialPatients = [
  { id: "PT001", name: "Michael Scott", facility: "Jupitar Hospital", lastTrack: "07/04/2020", provider: "Dr. Jerry Port", status: "Critical" },
  { id: "PT002", name: "Dwight Schrute", facility: "Global Hospital", lastTrack: "05/12/1999", provider: "Dr. John Doe", status: "Need Attention" },
  { id: "PT003", name: "Jim Halpert", facility: "Lifepoint Multispeciality", lastTrack: "08/08/2020", provider: "Dr. Sunit Pawar", status: "Critical" },
  { id: "PT004", name: "Pam Beesly", facility: "Apple Hospital", lastTrack: "26/08/1988", provider: "Dr. Mangala", status: "Need Attention" },
  { id: "PT005", name: "Stanley Hudson", facility: "Shalby Hospital", lastTrack: "19/10/1999", provider: "Dr. Denial Victory", status: "Critical" },
  { id: "PT006", name: "Kevin Malone", facility: "Billroth Hospitals", lastTrack: "01/02/1998", provider: "Dr. John Ali", status: "Need Attention" },
  { id: "PT007", name: "Angela Martin", facility: "Birlas Hospital", lastTrack: "05/12/2021", provider: "Dr. Tejas Patil", status: "Critical" },
  { id: "PT008", name: "Phyllis Vance", facility: "Lifespring Hospital", lastTrack: "25/12/2012", provider: "Dr. Devid Pawar", status: "Need Attention" }
];

const Dashboard = () => {
  const [opened, setOpened] = useState(true);
  const [modalOpened, { open, close }] = useDisclosure(false);
  const [patients] = useState(initialPatients);
  const [sortAsc, setSortAsc] = useState(true);

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: opened?200:80,// Full width when opened, 50px when closed
        breakpoint: 'sm',
        // collapsed: { mobile: !opened, desktop: !opened }
      }}
      padding="md"
      styles={{
        main: {
          background: '#f8f9fa'  // Light gray background for main content
        }
      }}
    >
      <AppShell.Header p="md" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Group gap="xs">
          <Burger opened={opened} onClick={() => setOpened(!opened)} hiddenFrom="sm" size="sm" />
          <ActionIcon 
            variant="default"
            color="gray"
            onClick={() => setOpened(!opened)}
            radius="xl"
            sx={{
              border: 'none', // Adds a border
              borderRadius: '50%', // Ensures it's a perfect circle
              boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.2)',
            }}
          >
            {opened ? <IconChevronLeft size={24} /> : <IconChevronRight size={24} />}
          </ActionIcon>
        </Group>
        <Group gap="xs">
          <img src={bellpng} alt="" srcset="" />
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


<AppShell.Main>
  <div
    style={{
      display: "flex",
      gap: "50px",
      marginBottom: "32px",
      justifyContent: "center",
      flexWrap: "nowrap",
      overflowX: "auto", // Enables horizontal scrolling if needed
    }}
  >
    {[
      { icon: IconUser, title: "Patients", count: "10000" },
      { icon: IconHeartRateMonitor, title: "Devices", count: "1000" },
      { icon: IconHospital, title: "Nurses", count: "500" },
      { icon: IconAlertTriangle, title: "Providers", count: "1000" },
    ].map((stat, index) => (
      <Card
        key={index}
        shadow="xl"
        padding="lg"
        radius="md"
        style={{
          width: "250px",
          height: "171px",
          display: "flex",
          alignItems: "center",
          gap: "24px",
          // border:"0.01px solid black",
          borderLeft: "4px solid red",
          transition: "border 0.3s ease, box-shadow 0.3s ease",
          boxShadow: "0px 10px 10px rgba(0, 0, 0, 0.5)", // Shadow only at the bottom

          flexShrink: 0, // Ensures cards stay in one line
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = "#228BE6";
          e.currentTarget.style.boxShadow = "0 12px 24px rgba(0, 0, 255, 0.3)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = "red";
          e.currentTarget.style.boxShadow = "0 20px 20px rgba(0, 0, 0, 0.2)";
        }}
      >
        {/* Icon container */}
        <div
          style={{
            width: 80,
            height: 80,
            borderRadius: "50%",
            backgroundColor: "#d0ebff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.1)",
          }}
        >
          <stat.icon size={48} style={{ color: "gray" }} />
        </div>

        {/* Text content */}
        <div style={{ flex: 1 }}>
          <Text size="lg" fw={500}>
            {stat.title}
          </Text>
          <Text size="xl" fw={700} c="red">
            {stat.count}
          </Text>
        </div>
      </Card>
 

  ))}
</div>

{/* patient card */}
        <Card shadow="sm" radius="md" p="md">
          <Group justify="space-between" mb="md">
            <Group>
              <Checkbox/>
              <Text className="texttt" size="lg" fw={500}>
  Patient List <span style={{ color: "#C7C8CA" }}> (20 Times)</span>
</Text>

            </Group>
            
            <Group>
            <TextInput
                placeholder="Facility/Hospital"
                style={{ width: '200px' }}
                rightSection={<IconChevronDown size={18} style={{ color: 'gray' }} />}
              />
              <TextInput
                placeholder="Status"
                style={{ width: '200px' }}
                rightSection={<IconChevronDown size={18} style={{ color: 'gray' }} />}
              />
              <TextInput
                placeholder="Search by ID or Name"
                style={{ width: '200px' }}
                rightSection={<IconChevronDown size={18} style={{ color: 'gray' }} />}
              />
             <TextInput
                placeholder="Provider"
                style={{ width: '200px' }}
                rightSection={<IconChevronDown size={18} style={{ color: 'gray' }} />}
              />

            </Group>
          </Group>

          <ScrollArea>
            <Table>
              <Table.Thead>
                <Table.Tr>
                  <Table.Th style={{ cursor: 'pointer' }} onClick={() => setSortAsc(!sortAsc)}>
                    <Group gap="xs">
                      Patient ID
                      {sortAsc ? <IconArrowUp style={{ height: "18px", marginBottom:"-5px", marginLeft: "-10px" }} size={14} /> : <img style={{ height: "18px", marginBottom:"-5px", marginLeft: "-10px" }} src={arrow} alt="arrow" />}
                    </Group>
                  </Table.Th>
                  <Table.Th>
Patient Name
  <img style={{ height: "18px", marginBottom:"-5px", marginLeft: "1px" }} src={arrow} alt="arrow" />
</Table.Th>
                  <Table.Th>
Facility
  <img style={{ height: "18px", marginBottom:"-5px", marginLeft: "1px" }} src={arrow} alt="arrow" />
</Table.Th>
                  <Table.Th>
Last Track
  <img style={{ height: "18px", marginBottom:"-5px", marginLeft: "1px" }} src={arrow} alt="arrow" />
</Table.Th>
                  <Table.Th>
Provider
  <img style={{ height: "18px", marginBottom:"-5px", marginLeft: "1px" }} src={arrow} alt="arrow" />
</Table.Th>
                  <Table.Th>
  Status 
  <img style={{ height: "18px", marginBottom:"-5px", marginLeft: "1px" }} src={arrow} alt="arrow" />
</Table.Th>

                  <Table.Th style={{ textAlign: 'right' }}>Action</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                {patients.map((patient) => (
                  <Table.Tr key={patient.id}>
                    <Table.Td style={{ color: 'red' }}># {patient.id}</Table.Td>
                    <Table.Td>{patient.name}</Table.Td>
                    <Table.Td>{patient.facility}</Table.Td>
                    <Table.Td>{patient.lastTrack}</Table.Td>
                    <Table.Td>{patient.provider}</Table.Td>
                    <Table.Td>
                      
                        {patient.status}
                     
                    </Table.Td>
                    <Table.Td>
                      <Group gap="xs" justify="flex-end">
                      <img style={{ height: "20px", width: "20px" }} src={actionw} alt="action icon" />

                      <img style={{ height: "20px", width: "20px" }} src={actiond} alt="action icon" />
                   

                        
                      </Group>
                    </Table.Td>
                  </Table.Tr>
                ))}
              </Table.Tbody>
            </Table>
          </ScrollArea>
        </Card>
      </AppShell.Main>

      <Modal opened={modalOpened} onClose={close} title="Create New Patient" centered>
        <TextInput
          label="Name"
          placeholder="Enter patient name"
          required
          mb="md"
        />
        <TextInput
          label="Facility"
          placeholder="Enter facility name"
          required
          mb="md"
        />
        <Group justify="flex-end" mt="md">
          <Button color="blue" onClick={close}>Add Patient</Button>
        </Group>
      </Modal>
    </AppShell>
  );
};

export default Dashboard;
