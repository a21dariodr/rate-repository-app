import { Image, StyleSheet } from "react-native"

const styles = StyleSheet.create({
  image: {
    width: 70,
    height: 70,
    borderRadius: 5
  },
});

const AvatarImage = ({ imageUrl }) => {
  return (
    <Image
      style={styles.image}
      source={{
        uri: imageUrl,
    }}/>
  )
}

export default AvatarImage