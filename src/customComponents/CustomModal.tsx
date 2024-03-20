import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Radio from "@mui/joy/Radio";
import CurrencySymbol from "../components/CurrencySymbol";
import { useDispatch } from "react-redux";
import { cincrement } from "../redux/cartReducer";
import { toast } from "../utils/utils";
import { useState } from "react";
import { RadioGroup } from "@mui/material";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "4px solid #b65c46",
  boxShadow: 24,
  p: 4,
};

export default function CustomModal({
  handleClose,
  data,
  open,
  base_url,
  setdata,
}: any) {
  const dispatch = useDispatch();
  const [selectedValue, setSelectedValue] = useState("0");
  const [selectedValueaddons, setSelectedValueaddons] = useState("0");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(``);
    setSelectedValue(event.target.value);

    console.log(`event.target.value`, event.target.value);

    const price = event.target.value.split("Price :")[1];

    setdata({
      ...data,
      ["selectedVariant"]: event.target.value,
      ["price"]: Number(price),
    });
  };

  const handleChangeAddons = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValueaddons(event.target.value);

    console.log(`event.target.value`, event.target.value);

    const price =
      Number(event.target.value.split("Price :")[1]) + Number(data.price);

    setdata({
      ...data,
      ["selectedAddons"]: event.target.value,
      ["price"]: Number(price),
    });
  };

  console.log(`data`, data, selectedValue);

  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
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
              <Grid item xs={12}>
                <img src={base_url + "/" + data?.image} width={390} alt="" />
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
                      toast(true, "product added to cart");
                    }}
                    color="success"
                  >
                    Add to cart
                  </Button>
                </Stack>
              </Grid>

              <Grid item xs={6}>
                <Box sx={{ display: "flex", gap: 2 }}>
                  <RadioGroup name="variation">
                    {data?.variations.map((vdata: any, key: number) => (
                      <Radio
                        value={vdata?.type + " Price :" + vdata?.price}
                        checked={
                          selectedValue ==
                          vdata?.type + " Price :" + vdata?.price
                        }
                        onChange={handleChange}
                        label={vdata?.type + " Price: " + vdata?.price}
                        size="md"
                        key={key}
                      />
                    ))}
                  </RadioGroup>
                </Box>
                {data?.add_ons.length > 0 && (
                  <>
                    <Typography
                      id="transition-modal-description"
                      sx={{ mt: 2 }}
                    >
                      Add Extra item
                    </Typography>
                    <Box sx={{ display: "flex", gap: 2 }}>
                      <RadioGroup name="addons">
                        {data?.add_ons.map((vdata: any, key: number) => (
                          <Radio
                            value={vdata?.name + " Price :" + vdata?.price}
                            checked={
                              selectedValueaddons ==
                              vdata?.name + " Price :" + vdata?.price
                            }
                            onChange={handleChangeAddons}
                            label={vdata?.name + " Price: " + vdata?.price}
                            size="md"
                            key={key}
                          />
                        ))}
                      </RadioGroup>
                    </Box>
                  </>
                )}
              </Grid>
            </Grid>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
