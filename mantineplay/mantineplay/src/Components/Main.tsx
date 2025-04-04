import { AppShell, Burger, Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Link } from 'react-router-dom';


function Main() {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 200,
        breakpoint: 'sm',
        collapsed: { mobile: !opened, desktop: !opened },
      }}
      padding="md"
    >
      {/* Header */}
      <AppShell.Header p="md" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
        <Button onClick={toggle}>{opened ? 'Collapse Sidebar' : 'Expand Sidebar'}</Button>
        <div>Logo</div>
      </AppShell.Header>

      {/* Sidebar */}
      <AppShell.Navbar p="md">
        <Link to="/Dashboard" style={{ textDecoration: 'none', color: 'black' }}>
          Dashboard
        </Link>
        <Link to="/Patients" style={{ textDecoration: 'none', color: 'black' }}>
          Patients
        </Link>
        <Link to="./Alerts" style={{ textDecoration: 'none', color: 'black' }}>
          Alerts
        </Link>
        <Link to="/Providers" style={{ textDecoration: 'none', color: 'black' }}>
          Providers
        </Link>
        <Link to="/Nurses" style={{ textDecoration: 'none', color: 'black' }}>
          Nurses
        </Link>
        <Link to="/Devices" style={{ textDecoration: 'none', color: 'black' }}>
          Devices
        </Link>
        <Link to="/Programs" style={{ textDecoration: 'none', color: 'black' }}>
          Programs
        </Link>
        <Link to="/Orders" style={{ textDecoration: 'none', color: 'black' }}>
          Orders
        </Link>
        <Link to="/Users" style={{ textDecoration: 'none', color: 'black' }}>
          Users
        </Link>
      </AppShell.Navbar>

      {/* Main Content */}
      <AppShell.Main>Patient List</AppShell.Main>
    </AppShell>
  );
}

export default Main;
