import { Text } from "react-native";
import moment from "moment";
import styles from "./Moment.component.style";

function Moment() {
  moment.locale("pt-br");
  const time = moment().format("LLLL");
  return <Text style={styles.moment}>{time}</Text>;
}

export default Moment;
