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
import patientssvg from "../images/patientsw.png";
import alertspng from "../images/alerts.svg";
import providerspng from "../images/providers.svg";
import nursespng from "../images/nurses.svg";
import devicesvg from "../images/devicess.svg";
import programpng from "../images/program.svg";
import userpng from "../images/users.svg";
import settingspng from "../images/settings.svg";
import signout from "../images/signout.svg";
import sidebarimg from "../images/Dashboard-2.png"
import arrow from "../images/downarrow.png"
import actionw from "../images/awrite.svg"
import actiond from "../images/adelete.svg"
import heartrate from "../images/heartrate.png"
import height from "../images/height.png"
import oximeter from "../images/oximeter.png"
import lungs from "../images/lungs.png"
import bellpng from "../images/bell.svg"

const menuItems = [
  { icon: <img src={dashboardIcon} alt="Dashboard" top= {139} left= {47} width= {22} height= {18} />, label: "Dashboard", link: "/" },
  { icon: <img style={{color:"red"}}src={patientssvg} alt="Patients" top= {139} left= {47} width= {22} height= {18} />, label: "Patients", link: "/Patients" },
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
  { id: "PT001", name: "Michael Scott", facility: "Jupitar Hospital", heartRate: 80, height: "5'5", weight: '65kg', bloodPressure: '118/75', alert: 'No Vitals'  },
  { id: "PT002", name: "Dwight Schrute", facility: "Global Hospital", heartRate: 80, height: "5'5", weight: '65kg', bloodPressure: '118/75', alert: 'Needs Attention' },
  { id: "PT003", name: "Jim Halpert", facility: "Lifepoint Multispeciality", heartRate: 80, height: "5'5", weight: '65kg', bloodPressure: '118/75', alert: 'Needs Attention' },
  { id: "PT004", name: "Pam Beesly", facility: "Apple Hospital", heartRate: 80, height: "5'5", weight: '65kg', bloodPressure: '118/75', alert: 'Needs Attention' },
  { id: "PT005", name: "Stanley Hudson", facility: "Shalby Hospital", heartRate: 80, height: "5'5", weight: '65kg', bloodPressure: '118/75', alert: 'Needs Attention' },
  { id: "PT006", name: "Kevin Malone", facility: "Billroth Hospitals", heartRate: 80, height: "5'5", weight: '65kg', bloodPressure: '118/75', alert: 'Needs Attention'  },
  { id: "PT007", name: "Angela Martin", facility: "Birlas Hospital", heartRate: 80, height: "5'5", weight: '65kg', bloodPressure: '118/75', alert: 'Needs Attention' },
  { id: "PT008", name: "Phyllis Vance", facility: "Lifespring Hospital", heartRate: 80, height: "5'5", weight: '65kg', bloodPressure: '118/75', alert: 'Needs Attention'  },
  { id: "PT009", name: 'John Doe', facility: 'City Hospital', heartRate: 72, height: "5'8", weight: '70kg', bloodPressure: '120/80', alert: 'Needs Attention' },
  { id: "PT010", name: 'Jane Smith', facility: 'Green Valley Clinic', heartRate: 80, height: "5'5", weight: '65kg', bloodPressure: '118/75', alert: 'Needs Attention' },
];

const Patients = () => {
  const [opened, setOpened] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [patients, setPatients] = useState(initialPatients);
  const [sortAsc, setSortAsc] = useState(true);
  const [newPatient, setNewPatient] = useState({
    name: '',
    facility: '',
    heartRate: '',
    height: '',
    weight: '',
    bloodPressure: '',
    alert: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewPatient({ ...newPatient, [e.target.name]: e.target.value });
  };

  const addPatient = () => {
    if (!newPatient.name || !newPatient.facility) return;
    const newId = patients.length > 0 ? Math.max(...patients.map((p) => p.id)) + 1 : 101;
    setPatients([...patients, { id: newId, ...newPatient }]);
    setModalOpen(false);
    setNewPatient({
      name: '',
      facility: '',
      heartRate: '',
      height: '',
      weight: '',
      bloodPressure: '',
      alert: '',
    });
  };

  const sortPatients = () => {
    const sortedPatients = [...patients].sort((a, b) => (sortAsc ? a.id - b.id : b.id - a.id));
    setPatients(sortedPatients);
    setSortAsc(!sortAsc);
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
        
      <div style={{ 
  padding: '20px', 
  marginTop: "50px", 
  boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.2)', 
  borderRadius: '8px', 
  marginBottom: '25px' 
}}>

          <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '5px',borderRadius: '8px'  }}>
            
          </div>
          

          <Card className='' radius="md" p="md">
            <Group justify="space-between" mb="md">
              <Group>
                
              <Text>
  Patient List <span style={{ color: "grey" }}>(100 Times)</span>
</Text>
              </Group>

              <Group>
                
                <Button style={{ backgroundColor: "red", color: "white" }} >
                  CREATE PATIENT
                </Button>
                <hr style={{ margin: '10px 0', border: '1px solid #ddd' }} />
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
                    <Table.Th onClick={sortPatients} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px' }}>
                      Patient ID {sortAsc ? <IconArrowUp style={{ height: "18px", marginBottom:"-5px", marginLeft: "-6px" }} size={14} /> : <img style={{ height: "18px", marginBottom:"-5px", marginLeft: "1px" }} src={arrow} alt="arrow" /> }
                    </Table.Th>
                    <Table.Th>Patient Name
                      <img style={{ height: "18px", marginBottom:"-5px", marginLeft: "1px" }} src={arrow} alt="arrow" />
                    </Table.Th>
                    <Table.Th style={{ paddingLeft: '5px' }}>Facility
                      <img style={{ height: "18px", marginBottom:"-5px", marginLeft: "1px" }} src={arrow} alt="arrow" />
                    </Table.Th>
                    <Table.Th style={{ paddingLeft: '20px' }}><span>      
<img style={{ height:'20px',width:'25px'}} src={heartrate} alt="" /></span>
</Table.Th>

                    <Table.Th> <img style={{ height:'20px',width:'25px'}} src={height} alt="" /></Table.Th>
                    <Table.Th>  <span> <img style={{ height:'23px',width:'25px'}} src={oximeter} alt="" /></span> </Table.Th>
                    <Table.Th style={{ paddingLeft: '25px' }}> <img style={{ height:'20px',width:'25px'}}src={lungs} alt="" /> </Table.Th>
                    <Table.Th style={{ paddingLeft: '55px' }}>Alert <img style={{ height: "18px", marginBottom:"-5px", marginLeft: "1px" }} src={arrow} alt="arrow" /></Table.Th>

                  </Table.Tr>
                </Table.Thead>
                <Table.Tbody>
                  {patients.map((patient) => (
                    <Table.Tr key={patient.id}>
                                        <Table.Td style={{ color: 'red' }}># {patient.id}</Table.Td>
                                        <Table.Td>{patient.name}</Table.Td>
                      <Table.Td>{patient.facility}</Table.Td>
                      <Table.Td>{patient.heartRate} bpm</Table.Td>
                      <Table.Td>{patient.height}</Table.Td>
                      <Table.Td>{patient.weight}</Table.Td>
                      <Table.Td>{patient.bloodPressure}</Table.Td>
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
    backgroundColor: patient.alert === 'Needs Attention' ? '#fba0a0' :
                     patient.alert === 'No Vitals' ? '#fed09b' : 'gray',
  }}
>
  {patient.alert}
</Badge>

</Table.Td>
                    </Table.Tr>
                  ))}
                </Table.Tbody>
              </Table>
            </ScrollArea>
          </Card>
        </div>
      </AppShell.Main>

      <Modal opened={modalOpen} onClose={() => setModalOpen(false)} title="Create New Patient" centered>
        <TextInput label="Name" name="name" value={newPatient.name} onChange={handleInputChange} required />
        <TextInput label="Facility" name="facility" value={newPatient.facility} onChange={handleInputChange} required />
        <Group position="right" mt="md">
          <Button variant="filled" color="blue" onClick={addPatient}>
            Add Patient
          </Button>
        </Group>
      </Modal>
    </AppShell>
  );
};

export default Patients;
