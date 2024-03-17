import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import CurrencySymbol from "../components/CurrencySymbol";
import { useDispatch } from "react-redux";
import { cincrement } from "../redux/cartReducer";
import { toast } from "../utils/utils";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function CustomModal({
  handleOpen,
  handleClose,
  data,
  open,
  base_url,
}: any) {
  const dispatch = useDispatch();
  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <img
                  src={base_url + "/" + data?.image}
                  width={270}
                  height={180}
                  alt=""
                />
              </Grid>
              <Grid item xs={6}>
                <Typography
                  id="transition-modal-title"
                  variant="h6"
                  component="h2"
                >
                  {data?.name}
                </Typography>
                <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                  {data?.description}
                </Typography>
                <CurrencySymbol /> {data?.price}
                <p>{data?.restaurant_name}</p>
                <Stack spacing={2} direction="row">
                  <Button
                    variant="contained"
                    onClick={(e) => {
                      const items = {
                        ...data,
                        ["total_iteam"]: 1,
                        ["price"]: Number(data.price),
                      };

                      dispatch(cincrement(items));
                      toast(true, 'product added to cart' );
                    }}
                    color="success"
                  >
                    Add to cart
                  </Button>
                </Stack>
              </Grid>
            </Grid>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
