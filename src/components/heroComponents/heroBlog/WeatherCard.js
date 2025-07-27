import { Box, Text } from "@chakra-ui/react";

const getWeatherStyle = (condition) => {
  if (!condition) return { bg: "gray.100", color: "black" };
  const lower = condition.toLowerCase();
  if (lower.includes("clear")) return { bg: "yellow.200", color: "black" };
  if (lower.includes("cloud")) return { bg: "gray.300", color: "black" };
  if (lower.includes("rain")) return { bg: "blue.300", color: "white" };
  if (lower.includes("snow")) return { bg: "white", color: "black" };
  if (lower.includes("storm")) return { bg: "purple.400", color: "white" };
  return { bg: "gray.100", color: "black" };
};

const WeatherCard = ({ data }) => {
  const { bg, color } = getWeatherStyle(data.weather[0].description);

  return (
    <Box p={4} rounded="md" shadow="md" bg={bg} color={color}>
      <Text>
        <strong>Temperature:</strong> {data.main.temp}°C
      </Text>
      <Text>
        <strong>Condition:</strong> {data.weather[0].description}
      </Text>
      <Text>
        <strong>Humidity:</strong> {data.main.humidity}%
      </Text>
      <Text>
        <strong>Wind Speed:</strong> {data.wind.speed} m/s
      </Text>
    </Box>
  );
};

export default WeatherCard;
