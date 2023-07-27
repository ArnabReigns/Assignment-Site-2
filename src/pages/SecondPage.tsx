import Navbar from "../components/Navbar";
import DataTable from "../components/DataTable";
import { Box, Card } from "@mui/material";
import CheckboxComponent from "../components/CheckboxComponent";

const SecondPage = () => {
  return (
    <>
      <Navbar />
      <Box p={2}>
        <Card>
          <DataTable />
        </Card>
        <Box height={'3rem'}/>
        <Box>
            <CheckboxComponent/>    
        </Box>
      </Box>
    </>
  );
};

export default SecondPage;
