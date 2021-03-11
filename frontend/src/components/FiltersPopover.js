import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Form, ListGroup, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { updateProductFilters } from "../actions/productActions";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import ListItemText from "@material-ui/core/ListItemText";
import Select from "@material-ui/core/Select";
import Checkbox from "@material-ui/core/Checkbox";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
  },
  chips: {
    display: "flex",
    flexWrap: "wrap",
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export default function FiltersPopover() {
  const classes = useStyles();

  const dispatch = useDispatch();

  const productFilters = useSelector((state) => state.productFilters);
  const productList = useSelector((state) => state.productList);

  let { inStock, comingSoon, typeOfBookFilter } = productFilters;
  const { typeOfBookCategories } = productList;

  function updateFilterTypeOfBooks(e) {
    typeOfBookFilter = e.target.value;

    dispatch(updateProductFilters({ typeOfBookFilter }));
  }

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>FILTREAZA</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ListGroup variant="flush">
              <ListGroup.Item className="border-0">
                <Form.Check
                  type="switch"
                  id="instoc"
                  label="În Stoc"
                  checked={inStock}
                  onChange={() =>
                    dispatch(updateProductFilters({ inStock: "toggle" }))
                  }
                />
              </ListGroup.Item>
              <ListGroup.Item className="border-0">
                <Form.Check
                  type="switch"
                  id="comingsoon"
                  label="În curând"
                  onChange={() =>
                    dispatch(updateProductFilters({ comingSoon: "toggle" }))
                  }
                  checked={comingSoon}
                />
              </ListGroup.Item>
            </ListGroup>

            <div class="d-flex">
              <FormControl className={classes.formControl}>
                <InputLabel id="demo-mutiple-checkbox-label">
                  Categorie
                </InputLabel>
                <Select
                  labelId="demo-mutiple-checkbox-label"
                  id="demo-mutiple-checkbox"
                  multiple
                  value={typeOfBookFilter}
                  onChange={updateFilterTypeOfBooks}
                  input={<Input />}
                  renderValue={(selected) =>
                    selected.length + " Categorii selectate"
                  }
                  MenuProps={MenuProps}
                >
                  {typeOfBookCategories.map((name) => (
                    <MenuItem key={name} value={name}>
                      <Checkbox checked={typeOfBookFilter.indexOf(name) > -1} />
                      <ListItemText primary={name} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
