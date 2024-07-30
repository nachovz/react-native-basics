import AppStyles from "@/styles/AppStyles";
import { Stack } from "expo-router";
import { Appbar, Provider as PaperProvider } from "react-native-paper";

export default function RootLayout() {
  return (
    <PaperProvider>
      <Appbar style={AppStyles.bar}>
        <Appbar.Content title="Courses" />
      </Appbar>
      <Stack>
        <Stack.Screen name="index" />
      </Stack>
    </PaperProvider>
  );
}
