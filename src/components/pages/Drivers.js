import { useState } from "react";
import { Button, Group, Modal, TextInput, useMantineColorScheme } from "@mantine/core";
import { db } from "../../firebase";
import { uid } from "uid";
import { set, ref, onValue, update } from "firebase/database";

const Drivers = () => {
  const [opened, setOpened] = useState(false);
  const [nick, setNick] = useState("");
  const [name, setName] = useState("");

  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  const writeToDatabase = (e) => {
    e.preventDefault();
    const uuid = uid();
    set(ref(db, `/drivers/${nick}`), {
      name,
      nick,
      uuid,
    });

    setName("");
    setNick("");
    setOpened(false);
  };

  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Добавление водителя"
      >
        <form onSubmit={writeToDatabase}>
          <TextInput
            mb="sm"
            label="Позывной"
            value={nick}
            onChange={(e) => setNick(e.target.value)}
          />
          <TextInput
            mb="sm"
            label="ФИО"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Group position="center">
        <Button type="submit" variant={dark ? "light" : "filled"}>Добавить</Button>
      </Group>
        </form>
      </Modal>
      <Group position="center">
        <Button variant={dark ? "light" : "filled"} onClick={() => setOpened(true)}>Добавить водителя</Button>
      </Group>
    </>
  );
};
export default Drivers;
