import app from "./app";
import dotenv from "./config/dotenv";

// Ensure environment variables are loaded


const PORT = dotenv.PORT;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
