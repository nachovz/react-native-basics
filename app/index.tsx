import { FlatList, Linking, View } from "react-native";
import { Button, Card, Title, Paragraph } from "react-native-paper";

import courses from "../data/courses.json";

const handleClick = (link: string) => {
  Linking.canOpenURL(link).then((supported) => {
    if (supported) {
      Linking.openURL(link);
    } else {
      console.log("Don't know how to open URI: " + link);
    }
  });
};

export default function Index() {
  return (
    <View>
      <FlatList
        data={courses}
        renderItem={({ item }) => (
          <Card>
            <Card.Cover source={{ uri: item.image }} />
            <Card.Content>
              <Title>{item.title}</Title>
              <Paragraph>{item.description}</Paragraph>
            </Card.Content>
            <Card.Actions>
              <Button onPress={() => handleClick(item.link)}>
                Tab to view
              </Button>
            </Card.Actions>
          </Card>
        )}
      />
    </View>
  );
}
