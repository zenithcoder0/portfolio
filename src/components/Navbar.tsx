import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import type { Theme } from '@mui/material/styles';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={(theme: Theme) => ({zIndex: theme.zIndex.drawer + 1,})}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            PORTFOLIO - ZENITHCODER0
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
