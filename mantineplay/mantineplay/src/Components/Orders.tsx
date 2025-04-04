import React, { useState } from 'react';
import {
  Select,
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

const initialOrders = {
  allOrders: [
    { id: 1, providerName: 'Provider A', date: '2025-02-10', fulfilment: 'Pending', total: '100', status: 'pending', color: 'gray' },
    { id: 2, providerName: 'Provider B', date: '2025-02-11', fulfilment: 'Accepted', total: '200', status: 'accepted', color: 'green' },
    { id: 3, providerName: 'Provider C', date: '2025-02-12', fulfilment: 'Out of Delivery', total: ' 150', status: 'out_of_delivery', color: 'blue' },
    { id: 4, providerName: 'Provider D', date: '2025-02-13', fulfilment: 'Fulfilled', total: ' 250', status: 'fulfilled', color: 'purple' },
    { id: 5, providerName: 'Provider E', date: '2025-02-14', fulfilment: 'Unfulfilled', total: ' 50', status: 'unfulfilled', color: 'red' },
    { id: 6, providerName: 'Provider F', date: '2025-02-15', fulfilment: 'Rejected', total: ' 30', status: 'rejected', color: 'orange' },
    { id: 7, providerName: 'Provider G', date: '2025-02-16', fulfilment: 'Pending', total: ' 200', status: 'pending', color: 'gray' },
    { id: 8, providerName: 'Provider H', date: '2025-02-17', fulfilment: 'Accepted', total: ' 500', status: 'accepted', color: 'green' },
    { id: 9, providerName: 'Provider I', date: '2025-02-18', fulfilment: 'Out of Delivery', total: ' 250', status: 'out_of_delivery', color: 'blue' },
    { id: 10, providerName: 'Provider J', date: '2025-02-19', fulfilment: 'Fulfilled', total: ' 350', status: 'fulfilled', color: 'purple' },
    { id: 11, providerName: 'Provider K', date: '2025-02-20', fulfilment: 'Unfulfilled', total: ' 100', status: 'unfulfilled', color: 'red' },
  ],
  accepted: [
    { id: 19, providerName: 'Provider S', date: '2025-03-01', fulfilment: 'Accepted', total: ' 200', status: 'accepted', color: 'green' },
    { id: 20, providerName: 'Provider T', date: '2025-03-02', fulfilment: 'Accepted', total: ' 150', status: 'accepted', color: 'green' },
    { id: 21, providerName: 'Provider U', date: '2025-03-03', fulfilment: 'Accepted', total: ' 300', status: 'accepted', color: 'green' },
    { id: 22, providerName: 'Provider V', date: '2025-03-04', fulfilment: 'Accepted', total: ' 500', status: 'accepted', color: 'green' },
    { id: 23, providerName: 'Provider W', date: '2025-03-05', fulfilment: 'Accepted', total: ' 600', status: 'accepted', color: 'green' },
    { id: 24, providerName: 'Provider X', date: '2025-03-06', fulfilment: 'Accepted', total: ' 700', status: 'accepted', color: 'green' },
    { id: 25, providerName: 'Provider Y', date: '2025-03-07', fulfilment: 'Accepted', total: ' 400', status: 'accepted', color: 'green' },
    { id: 26, providerName: 'Provider Z', date: '2025-03-08', fulfilment: 'Accepted', total: ' 350', status: 'accepted', color: 'green' },
    { id: 27, providerName: 'Provider AA', date: '2025-03-09', fulfilment: 'Accepted', total: ' 250', status: 'accepted', color: 'green' },
    { id: 28, providerName: 'Provider AB', date: '2025-03-10', fulfilment: 'Accepted', total: ' 800', status: 'accepted', color: 'green' }
  ],
  rejected: [
    { id: 29, providerName: 'Provider AC', date: '2025-03-11', fulfilment: 'Rejected', total: ' 130', status: 'rejected', color: 'orange' },
    { id: 30, providerName: 'Provider AD', date: '2025-03-12', fulfilment: 'Rejected', total: ' 150', status: 'rejected', color: 'orange' },
    { id: 31, providerName: 'Provider AE', date: '2025-03-13', fulfilment: 'Rejected', total: ' 200', status: 'rejected', color: 'orange' },
    { id: 32, providerName: 'Provider AF', date: '2025-03-14', fulfilment: 'Rejected', total: ' 170', status: 'rejected', color: 'orange' },
    { id: 33, providerName: 'Provider AG', date: '2025-03-15', fulfilment: 'Rejected', total: ' 250', status: 'rejected', color: 'orange' },
    { id: 34, providerName: 'Provider AH', date: '2025-03-16', fulfilment: 'Rejected', total: ' 180', status: 'rejected', color: 'orange' },
    { id: 35, providerName: 'Provider AI', date: '2025-03-17', fulfilment: 'Rejected', total: ' 220', status: 'rejected', color: 'orange' },
    { id: 36, providerName: 'Provider AJ', date: '2025-03-18', fulfilment: 'Rejected', total: ' 280', status: 'rejected', color: 'orange' },
    { id: 37, providerName: 'Provider AK', date: '2025-03-19', fulfilment: 'Rejected', total: ' 230', status: 'rejected', color: 'orange' },
    { id: 38, providerName: 'Provider AL', date: '2025-03-20', fulfilment: 'Rejected', total: ' 320', status: 'rejected', color: 'orange' }
  ],
  out_of_delivery: [
    { id: 39, providerName: 'Provider AM', date: '2025-03-21', fulfilment: 'Out of Delivery', total: ' 350', status: 'out_of_delivery', color: 'blue' },
    { id: 40, providerName: 'Provider AN', date: '2025-03-22', fulfilment: 'Out of Delivery', total: ' 400', status: 'out_of_delivery', color: 'blue' },
    { id: 41, providerName: 'Provider AO', date: '2025-03-23', fulfilment: 'Out of Delivery', total: ' 250', status: 'out_of_delivery', color: 'blue' },
    { id: 42, providerName: 'Provider AP', date: '2025-03-24', fulfilment: 'Out of Delivery', total: ' 150', status: 'out_of_delivery', color: 'blue' },
    { id: 43, providerName: 'Provider AQ', date: '2025-03-25', fulfilment: 'Out of Delivery', total: ' 200', status: 'out_of_delivery', color: 'blue' },
    { id: 44, providerName: 'Provider AR', date: '2025-03-26', fulfilment: 'Out of Delivery', total: ' 180', status: 'out_of_delivery', color: 'blue' },
    { id: 45, providerName: 'Provider AS', date: '2025-03-27', fulfilment: 'Out of Delivery', total: ' 320', status: 'out_of_delivery', color: 'blue' },
    { id: 46, providerName: 'Provider AT', date: '2025-03-28', fulfilment: 'Out of Delivery', total: ' 250', status: 'out_of_delivery', color: 'blue' },
    { id: 47, providerName: 'Provider AU', date: '2025-03-29', fulfilment: 'Out of Delivery', total: ' 300', status: 'out_of_delivery', color: 'blue' },
    { id: 48, providerName: 'Provider AV', date: '2025-03-30', fulfilment: 'Out of Delivery', total: ' 270', status: 'out_of_delivery', color: 'blue' }
  ],
  fulfilled: [
    { id: 49, providerName: 'Provider AW', date: '2025-03-31', fulfilment: 'Fulfilled', total: ' 500', status: 'fulfilled', color: 'purple' },
    { id: 50, providerName: 'Provider AX', date: '2025-04-01', fulfilment: 'Fulfilled', total: ' 450', status: 'fulfilled', color: 'purple' },
    { id: 51, providerName: 'Provider AY', date: '2025-04-02', fulfilment: 'Fulfilled', total: ' 600', status: 'fulfilled', color: 'purple' },
    { id: 52, providerName: 'Provider AZ', date: '2025-04-03', fulfilment: 'Fulfilled', total: ' 700', status: 'fulfilled', color: 'purple' },
    { id: 53, providerName: 'Provider BA', date: '2025-04-04', fulfilment: 'Fulfilled', total: ' 800', status: 'fulfilled', color: 'purple' },
    { id: 54, providerName: 'Provider BB', date: '2025-04-05', fulfilment: 'Fulfilled', total: ' 500', status: 'fulfilled', color: 'purple' },
    { id: 55, providerName: 'Provider BC', date: '2025-04-06', fulfilment: 'Fulfilled', total: ' 400', status: 'fulfilled', color: 'purple' },
    { id: 56, providerName: 'Provider BD', date: '2025-04-07', fulfilment: 'Fulfilled', total: ' 250', status: 'fulfilled', color: 'purple' },
    { id: 57, providerName: 'Provider BE', date: '2025-04-08', fulfilment: 'Fulfilled', total: ' 100', status: 'fulfilled', color: 'purple' },
    { id: 58, providerName: 'Provider BF', date: '2025-04-09', fulfilment: 'Fulfilled', total: ' 150', status: 'fulfilled', color: 'purple' }
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

const Orders = () => {
  const [opened, setOpened] = useState(true);
  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const [orderData, setOrderData] = useState({ providerName: '', date: '', fulfilment: 'pending', total: '', status: 'pending' });
  const [orders, setOrders] = useState(initialOrders.allOrders);
  const [sortOrder, setSortOrder] = useState<{ [key: string]: 'asc' | 'desc' }>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOrderData({ ...orderData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (value: string) => {
    setOrderData({ ...orderData, fulfilment: value });
  };

  const addOrder = () => {
    if (!orderData.providerName || !orderData.total) return;
    const newId = orders.length > 0 ? orders[orders.length - 1].id + 1 : 1;
    setOrders([...orders, { id: newId, ...orderData }]);
    setOrderModalOpen(false);
    setOrderData({ providerName: '', date: '', fulfilment: 'pending', total: '', status: 'pending' });
  };

  const sortData = (column: string) => {
    const order = sortOrder[column] === 'asc' ? 'desc' : 'asc';
    setSortOrder({ [column]: order });

    const sortedData = [...orders].sort((a, b) => {
      if (a[column] < b[column]) return order === 'asc' ? -1 : 1;
      if (a[column] > b[column]) return order === 'asc' ? 1 : -1;
      return 0;
    });
    setOrders(sortedData);
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
        <Tabs color="teal" defaultValue="allOrders">
          <Tabs.List>
            <Tabs.Tab value="allOrders">All Orders</Tabs.Tab>
            <Tabs.Tab value="new">New Orders</Tabs.Tab>
            <Tabs.Tab value="accepted">Accepted Orders</Tabs.Tab>
            <Tabs.Tab value="out_of_delivery">Out of Delivery</Tabs.Tab>
            <Tabs.Tab value="fulfilled">Fulfilled Orders</Tabs.Tab>
            <Tabs.Tab value="unfulfilled">Unfulfilled Orders</Tabs.Tab>
            <Tabs.Tab value="rejected">Rejected Orders</Tabs.Tab>
          </Tabs.List>

         {/* All Orders Panel */}
<Tabs.Panel value="allOrders" pt="xs">
  <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '15px' }}>
    <Button color="red">CREATE ORDER</Button>
    <hr style={{ margin: '10px 0', border: '1px solid #ddd' }} />
  </div>
  <ScrollArea style={{ width: '100%' }}>
    <Text size="lg" fw={700} mb="md">
                               ORDERS <span style={{ color: "grey" }}>(20 Times)</span>
                              </Text>

      <Table highlightOnHover striped withBorder>
        <Table.Thead>
          <Table.Tr>
            <Table.Th onClick={() => sortData('id')}>Order ID</Table.Th>
            <Table.Th onClick={() => sortData('providerName')}>Provider Name</Table.Th>
            <Table.Th onClick={() => sortData('date')}>Date</Table.Th>
            <Table.Th onClick={() => sortData('fulfilment')}>Fulfilment</Table.Th>
            <Table.Th onClick={() => sortData('total')}>Total</Table.Th>
            <Table.Th>Action</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {orders.map((order) => (
            <Table.Tr key={order.id}>
              <Table.Td>{order.id}</Table.Td>
              <Table.Td>{order.providerName}</Table.Td>
              <Table.Td>{order.date}</Table.Td>
              <Table.Td>
            <Text 
            color={order.fulfilment === 'Fulfilled' ? 'green' : order.fulfilment === 'Unfulfilled' ? 'red' : 'yellow'}>
            {order.fulfilment}
            </Text>
            </Table.Td>

              <Table.Td>{order.total}</Table.Td>
              <Table.Td>Action</Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
  </ScrollArea>
</Tabs.Panel>

{/* New Orders Panel */}
<Tabs.Panel value="new" pt="xs">
  <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '15px' }}>
    <Button color="red">CREATE ORDER</Button>
  </div>
  <ScrollArea style={{ width: '100%' }}>
    <Text size="lg" fw={700} mb="md">
                                NEW <span style={{ color: "grey" }}>(4 Times)</span>
                              </Text>
      <Table highlightOnHover striped withBorder>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Order ID</Table.Th>
            <Table.Th>Provider Name</Table.Th>
            <Table.Th>Date</Table.Th>
            <Table.Th>Fulfilment</Table.Th>
            <Table.Th>Total</Table.Th>
            <Table.Th>Action</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {orders.filter(order => order.status === 'pending').map((order) => (
            <Table.Tr key={order.id}>
              <Table.Td>{order.id}</Table.Td>
              <Table.Td>{order.providerName}</Table.Td>
              <Table.Td>{order.date}</Table.Td>
              <Table.Td>
            <Text 
            color={order.fulfilment === 'Fulfilled' ? 'green' : order.fulfilment === 'Unfulfilled' ? 'red' : 'yellow'}>
            {order.fulfilment}
            </Text>
            </Table.Td>
              <Table.Td>{order.total}</Table.Td>
              <Table.Td>Action</Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
  </ScrollArea>
</Tabs.Panel>

{/* Accepted Orders Panel */}
<Tabs.Panel value="accepted" pt="xs">
  <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '15px' }}>
  <Button color="red">CREATE ORDER</Button>
  </div>
  <ScrollArea style={{ width: '100%' }}>
  <Text size="lg" fw={700} mb="md">
                                ACCEPTED <span style={{ color: "grey" }}>(4 Times)</span>
                              </Text>
      <Table highlightOnHover striped withBorder>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Order ID</Table.Th>
            <Table.Th>Provider Name</Table.Th>
            <Table.Th>Date</Table.Th>
            <Table.Th>Fulfilment</Table.Th>
            <Table.Th>Total</Table.Th>
            <Table.Th>Action</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {orders.filter(order => order.status === 'accepted').map((order) => (
            <Table.Tr key={order.id}>
              <Table.Td>{order.id}</Table.Td>
              <Table.Td>{order.providerName}</Table.Td>
              <Table.Td>{order.date}</Table.Td>
              <Table.Td>
            <Text 
            color={order.fulfilment === 'Fulfilled' ? 'green' : order.fulfilment === 'Unfulfilled' ? 'red' : 'yellow'}>
            {order.fulfilment}
            </Text>
            </Table.Td>
              <Table.Td>{order.total}</Table.Td>
              <Table.Td>Action</Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>

  </ScrollArea>
</Tabs.Panel>


{/* Rejected Orders Panel */}
<Tabs.Panel value="rejected" pt="xs">
  <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '15px' }}>
  <Button color="red">CREATE ORDER</Button>
  </div>
  <ScrollArea style={{ width: '100%' }}>
  <Text size="lg" fw={700} mb="md">
                                NEW <span style={{ color: "grey" }}>(4 Times)</span>
                              </Text>
      <Table highlightOnHover striped withBorder>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Order ID</Table.Th>
            <Table.Th>Provider Name</Table.Th>
            <Table.Th>Date</Table.Th>
            <Table.Th>Fulfilment</Table.Th>
            <Table.Th>Total</Table.Th>
            <Table.Th>Action</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {orders.filter(order => order.status === 'rejected').map((order) => (
            <Table.Tr key={order.id}>
              <Table.Td>{order.id}</Table.Td>
              <Table.Td>{order.providerName}</Table.Td>
              <Table.Td>{order.date}</Table.Td>
              <Table.Td>
            <Text 
            color={order.fulfilment === 'Fulfilled' ? 'green' : order.fulfilment === 'Unfulfilled' ? 'red' : 'yellow'}>
            {order.fulfilment}
            </Text>
            </Table.Td>
              <Table.Td>{order.total}</Table.Td>
              <Table.Td>Action</Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>

  </ScrollArea>
</Tabs.Panel>

{/* Out of Delivery Orders Panel */}
<Tabs.Panel value="out_of_delivery" pt="xs">
  <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '15px' }}>
  <Button color="red">CREATE ORDER</Button>
  </div>
  <ScrollArea style={{ width: '100%' }}>
  <Text size="lg" fw={700} mb="md">
                                NEW <span style={{ color: "grey" }}>(4 Times)</span>
                              </Text>
      <Table highlightOnHover striped withBorder>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Order ID</Table.Th>
            <Table.Th>Provider Name</Table.Th>
            <Table.Th>Date</Table.Th>
            <Table.Th>Fulfilment</Table.Th>
            <Table.Th>Total</Table.Th>
            <Table.Th>Action</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {orders.filter(order => order.status === 'out_of_delivery').map((order) => (
            <Table.Tr key={order.id}>
              <Table.Td>{order.id}</Table.Td>
              <Table.Td>{order.providerName}</Table.Td>
              <Table.Td>{order.date}</Table.Td>
              <Table.Td>
            <Text 
            color={order.fulfilment === 'Fulfilled' ? 'green' : order.fulfilment === 'Unfulfilled' ? 'red' : 'yellow'}>
            {order.fulfilment}
            </Text>
            </Table.Td>
              <Table.Td>{order.total}</Table.Td>
              <Table.Td>Action</Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>

  </ScrollArea>
</Tabs.Panel>

{/* Fulfilled Orders Panel */}
<Tabs.Panel value="fulfilled" pt="xs">
  <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '15px' }}>
  <Button color="red">CREATE ORDER</Button>
  </div>
  <ScrollArea style={{ width: '100%' }}>
  <Text size="lg" fw={700} mb="md">
                                NEW <span style={{ color: "grey" }}>(4 Times)</span>
                              </Text>
      <Table highlightOnHover striped withBorder>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Order ID</Table.Th>
            <Table.Th>Provider Name</Table.Th>
            <Table.Th>Date</Table.Th>
            <Table.Th>Fulfilment</Table.Th>
            <Table.Th>Total</Table.Th>
            <Table.Th>Action</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {orders.filter(order => order.status === 'fulfilled').map((order) => (
            <Table.Tr key={order.id}>
              <Table.Td>{order.id}</Table.Td>
              <Table.Td>{order.providerName}</Table.Td>
              <Table.Td>{order.date}</Table.Td>
              <Table.Td>
            <Text 
            color={order.fulfilment === 'Fulfilled' ? 'green' : order.fulfilment === 'Unfulfilled' ? 'red' : 'yellow'}>
            {order.fulfilment}
            </Text>
            </Table.Td>
              <Table.Td>{order.total}</Table.Td>
              <Table.Td>Action</Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>

  </ScrollArea>
</Tabs.Panel>

{/* Unfulfilled Orders Panel */}
<Tabs.Panel value="unfulfilled" pt="xs">
  <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '15px' }}>
  <Button color="red">CREATE ORDER</Button>
  </div>
  <ScrollArea style={{ width: '100%' }}>
  <Text size="lg" fw={700} mb="md">
                                NEW <span style={{ color: "grey" }}>(4 Times)</span>
                              </Text>
      <Table highlightOnHover striped withBorder>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Order ID</Table.Th>
            <Table.Th>Provider Name</Table.Th>
            <Table.Th>Date</Table.Th>
            <Table.Th>Fulfilment</Table.Th>
            <Table.Th>Total</Table.Th>
            <Table.Th>Action</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {orders.filter(order => order.status === 'unfulfilled').map((order) => (
            <Table.Tr key={order.id}>
              <Table.Td>{order.id}</Table.Td>
              <Table.Td>{order.providerName}</Table.Td>
              <Table.Td>{order.date}</Table.Td>
              <Table.Td>
            <Text 
            color={order.fulfilment === 'Fulfilled' ? 'green' : order.fulfilment === 'Unfulfilled' ? 'red' : 'yellow'}>
            {order.fulfilment}
            </Text>
            </Table.Td>
              <Table.Td>{order.total}</Table.Td>
              <Table.Td>Action</Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>

  </ScrollArea>
</Tabs.Panel>


          {/* Create Order Modal */}
          
        </Tabs>
        </div>
      </AppShell.Main>
      <Modal opened={orderModalOpen} onClose={() => setOrderModalOpen(false)} title="Create New Order">
            <TextInput
              label="Provider Name"
              name="providerName"
              value={orderData.providerName}
              onChange={handleInputChange}
            />
            <TextInput
              label="Date"
              name="date"
              value={orderData.date}
              onChange={handleInputChange}
            />
            <TextInput
              label="Total"
              name="total"
              value={orderData.total}
              onChange={handleInputChange}
            />
            <Select
              label="Fulfilment Status"
              value={orderData.fulfilment}
              onChange={handleSelectChange}
              data={[
                { value: 'pending', label: 'Pending' },
                { value: 'accepted', label: 'Accepted' },
                { value: 'out_of_delivery', label: 'Out of Delivery' },
                { value: 'fulfilled', label: 'Fulfilled' },
                { value: 'unfulfilled', label: 'Unfulfilled' },
                { value: 'rejected', label: 'Rejected' },
              ]}
            />
            <Button onClick={addOrder}>Add Order</Button>
          </Modal>




    </AppShell>
  );
};

export default Orders;
