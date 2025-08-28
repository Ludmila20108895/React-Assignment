import React from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { useLanguage } from "../../contexts/languageContext";

const LanguageOption: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <TextField
      select
      value={language}
      onChange={(e) =>
        setLanguage(e.target.value as "en-US" | "fr-FR" | "es-ES")
      }
      variant="standard"
      sx={{ m: 2, minWidth: 150 }}
    >
      <MenuItem value="en-US">English</MenuItem>
      <MenuItem value="fr-FR">French</MenuItem>
      <MenuItem value="es-ES">Spanish</MenuItem>
    </TextField>
  );
};
export default LanguageOption;
