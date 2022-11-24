import { Text } from "react-native";
import "moment";
import "moment/locale/pt-br";
import moment from "moment-timezone";

import styles from "./Moment.component.style";

function Moment() {
  moment.locale("pt-br");
  const time = moment().format("LLLL");
  return <Text style={styles.moment}>{time}</Text>;
}

export default Moment;
