import { Layout, Header, Navigation, Drawer } from 'react-mdl';
import { Link } from 'react-router-dom';


function Nav() {
    return (
        <Layout fixedHeader fixedTabs>
            <Header transparent title="Title" className="header-color" title={<Link style={{ textDecoration: 'none', color: 'white' }} to="/">Joseph Pohl</Link>} scroll>
                <Navigation>
                    <Link style={{ paddingLeft: '30px' }} to="/resume">Resume</Link>
                    <Link style={{ paddingLeft: '30px' }} to="/aboutme">About Me</Link>
                    <Link style={{ paddingLeft: '30px' }} to="/projects">Projects</Link>
                    <Link style={{ paddingLeft: '30px' }} to="/contact">Contact</Link>
                </Navigation>
            </Header>
            <Drawer className="drawer-color" style={{ background: 'linear-gradient(to right, rgb(12, 2, 8), black)', outline: "none" }} title={<Link style={{ textDecoration: 'none', color: 'white' }} to="/">Joseph Pohl</Link>}>
                <Navigation >
                    <Link to="/resume">Resume</Link>
                    <Link to="/aboutme">About Me</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/contact">Contact</Link>
                </Navigation>
            </Drawer>
        </Layout>
    );
}

export default Nav;