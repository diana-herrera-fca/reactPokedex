import {Box, Container} from "@mui/material";

const Layout = ({children}) => {
    return(
        <Box>
            <Container sx={{ mt: 4, minHeight: '80vh' }}>
                {children}
            </Container>
            <Box component="footer" sx={{ textAlign: 'center', py: 2, mt: 4, bgcolor: 'grey.200' }}>
                © 2025 Diana Karen Herrera Todos los derechos reservados.
            </Box>
        </Box>
    );
};
export default Layout;