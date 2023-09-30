import { styled } from "@mui/material/styles";
import { Paper } from "@mui/material";

const Image = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: 60,
  lineHeight: "60px",
}));

interface PhotoProps {
  id: string;
  src: string;
}

export const Photo = ({ id, src }: PhotoProps) => {
  return (
    <div>
      <Image elevation={2}>
        <img src={src} alt={id} width="300" />
      </Image>
    </div>
  );
};
