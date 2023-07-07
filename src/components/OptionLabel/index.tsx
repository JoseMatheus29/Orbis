import { FormControlLabel, Radio } from "@mui/material";
import { motion } from "framer-motion";
import { useForm } from "../../hooks/useForm";
import { useState } from "react";

interface IOptionLabel {
  img: string;
  labelName: string;
  onClick: any | undefined;
  value: string;
  id?: string;
  checked: boolean;
}

const OptionLabel = ({ img, labelName, onClick, value, id, checked }: IOptionLabel) => {

  const [ selectedValue, setSelectedValue ] = useState('');

  return (
    <>
      <motion.div
        id="motion-div"
        whileHover={{ scale: 1.1 }}
        whileTap={{
          scale: 0.95,
          borderRadius: "100%",
        }}
      >
        <FormControlLabel
          value={value}
          control={<Radio checked={checked} />}
          className="label-form"
          label={
            <>
              <img src={img} alt="" id={id} />
              <h2>{labelName}</h2>
            </>
          }
          labelPlacement="top"
          onClick={onClick}
        />
      </motion.div>
    </>
  );
};

export default OptionLabel;
