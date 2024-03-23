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
import { useDispatch, useSelector } from "react-redux";
import { cdecrement, cincrement } from "../redux/cartReducer";
import { toast } from "../utils/utils";
import { useState } from "react";
import { FormControlLabel, RadioGroup } from "@mui/material";
import ButtonGroup from "@mui/material/ButtonGroup";
import Checkbox from "@mui/material/Checkbox";
import ShowPrice from "./ShowPrice";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  bgcolor: "background.paper",
  border: "1px solid #b65c46",
  boxShadow: 50,
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
  const [addonsQty, setaddonsQty] = useState<any>({});
  const [selectedValueaddons, setSelectedValueaddons] = useState("0");
  const carts = useSelector((state: any) => state?.carts);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    datas: any
  ) => {
    console.log(``);
    setSelectedValue(event.target.value);
    const price = event.target.value.split("Price :")[1];
    setdata({
      ...data,
      ["selectedVariant"]: event.target.value,
      ["price"]: Number(price),
    });
  };

  const handleChangeAddons = (
    event: React.ChangeEvent<HTMLInputElement>,
    vdata: any,
    type: string
  ) => {
    if (type == "+") {
      const filterValue = carts.find((value) => value.id === data?.id);

      if (filterValue) {
        const qty =
          Number(
            carts.find((value: any) => value.id == data?.id)?.addons_selected[
              vdata?.id
            ]?.qty || 0
          ) + 1;
        const collection = {
          ...vdata,
          ["qty"]: qty,
        };

        const toUpdate: any = { ...addonsQty, [vdata.id]: collection };
        setaddonsQty(toUpdate);

        console.log(`3333333`, toUpdate);
        setdata({ ...data, ["addons_selected"]: toUpdate });

        dispatch(
          cincrement({
            ...data,
            ["addons_selected"]: toUpdate,
            ["total_iteam"]: 0,
          })
        );
        // cincrement();
      } else {
        const qty = Number(addonsQty[vdata.id]?.qty || 0) + 1;
        const collection = {
          ...vdata,
          ["qty"]: qty,
        };

        const toUpdate: any = { ...addonsQty, [vdata.id]: collection };
        setaddonsQty(toUpdate);

        setdata({ ...data, ["addons_selected"]: toUpdate });
      }
    } else {
      const filterValue = carts.find((value) => value.id === data?.id);

      if (filterValue) {
        const qty =
          Number(
            carts.find((value: any) => value.id == data?.id)?.addons_selected[
              vdata?.id
            ]?.qty || 0
          ) - 1;

        const collection = {
          ...vdata,
          ["qty"]: qty >= 0 ? qty : 0,
        };

        const toUpdate: any = { ...addonsQty, [vdata.id]: collection };

        setaddonsQty(toUpdate);

        dispatch(
          cincrement({
            ...data,
            ["addons_selected"]: toUpdate,
            ["total_iteam"]: 0,
          })
        );
      } else {
        const qty = Number(addonsQty[vdata.id]?.qty || 0) - 1;

        const collection = {
          ...vdata,
          ["qty"]: qty >= 0 ? qty : 0,
        };

        const toUpdate: any = { ...addonsQty, [vdata.id]: collection };

        setaddonsQty(toUpdate);

        setdata({ ...data, ["addons_selected"]: toUpdate });
      }
    }
  };

  const decrementHandler = (id) => {
    const filterValue = carts.find((value) => value.id === id);
    // dispatch(decrement(value));
    dispatch(cdecrement(filterValue));
  };

  const cart = carts.find((element) => element.id === data.id);


  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
      sx={{
        border: '2px solid red', // Customize border styles here
        borderRadius: '10px', // Optional: Adjust border radius for rounded corners
        // Add any other custom styles you need
      }}
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
        <Box sx={style}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <img
                  src={base_url + "/" + data?.image}
                  style={{ width: "100%", maxHeight: "350px" }}
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
                <ShowPrice data={data} />
                <p>{data?.restaurant_name}</p>
                <Stack spacing={2} direction="row">
                  {carts.length > 0 &&
                  carts.find((element) => element.id === data.id) ? (
                    <ButtonGroup
                      variant="outlined"
                      aria-label="Basic button group"
                    >
                      <Button
                        onClick={() => decrementHandler(data.id)}
                        disabled={cart?.total_qty <= 1 ? true : false}
                      >
                        -
                      </Button>
                      <Button>{cart?.total_qty}</Button>
                      <Button
                        variant="outlined"
                        onClick={(e) => {
                          const filterValue = carts.find(
                            (value) => value.id == data?.id
                          );

                          if (filterValue) {
                            const items = {
                              ...filterValue,
                              ...data,
                              ["total_iteam"]: 1,
                              ["price"]: Number(data.price),
                            };

                            dispatch(cincrement(items));
                          } else {
                            const items = {
                              ...data,
                              ["total_iteam"]: 1,
                              ["price"]: Number(data.price),
                            };

                            dispatch(cincrement(items));
                          }

                          toast(true, "product added to cart");
                        }}
                      >
                        +
                      </Button>
                    </ButtonGroup>
                  ) : (
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
                      color="warning"
                    >
                      Add to cart
                    </Button>
                  )}
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
                        onChange={(e: any) => handleChange(e, vdata)}
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
                    <Box sx={{ gap: 2 }}>
                      {data?.add_ons.map((vdata: any, key: number) => (
                        <ButtonGroup
                          variant="outlined"
                          aria-label="Basic button group"
                          key={key}
                        >
                          <Typography sx={{ mx: 1 }}>
                            {vdata?.name + " Price: " + vdata?.price}
                          </Typography>
                          <Button
                            variant="outlined"
                            // color="error"
                            size="small"
                            onClick={(e: any) =>
                              handleChangeAddons(e, vdata, "-")
                            }
                          >
                            {" "}
                            -{" "}
                          </Button>

                          <Button>
                            {" "}
                            {carts.length > 0 ? (
                              <>
                                {
                                  carts.find(
                                    (value: any) => value.id == data?.id
                                  )?.addons_selected[vdata?.id]?.qty
                                }
                              </>
                            ) : (
                              <>
                                {(data?.addons_selected &&
                                  data?.addons_selected[vdata?.id]?.qty) ||
                                  0}{" "}
                              </>
                            )}
                          </Button>
                          <Button
                            variant="outlined"
                            // color="success"
                            size="small"
                            onClick={(e: any) =>
                              handleChangeAddons(e, vdata, "+")
                            }
                          >
                            {" "}
                            +{" "}
                          </Button>
                        </ButtonGroup>
                      ))}
                    </Box>
                  </>
                )}
              </Grid>
            </Grid>
          </Box>
      </Modal>
    </div>
  );
}
