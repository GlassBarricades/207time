import "dayjs/locale/ru";
import { useState } from "react";
import { DatePicker, TimeInput } from "@mantine/dates";
import { createStyles, TextInput, Button, Text, Modal } from "@mantine/core";
import dayjs from "dayjs";
import objectSupport from "dayjs/plugin/objectSupport";
dayjs.extend(objectSupport);

const useStyles = createStyles((theme) => ({
  form: {
    maxWidth: "500px",
    margin: "0 auto",
  },
}));

export function AddTimeForm() {
  const [name, setName] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [resultMinutes, setResultMinutes] = useState();
  const [opened, setOpened] = useState(false);

  const { classes } = useStyles();

  const timeHandler = (e) => {
    e.preventDefault();

    const startDay = dayjs(startDate).get('date')
    const startMonth = dayjs(startDate).get('month')
    const startYear = dayjs(startDate).get('year')
    const startHour = dayjs(startTime).get('hour')
    const startMinute = dayjs(startTime).get('minute')

    const startFullDate = dayjs(startDate).set('date', startDay).set('month', startMonth).set('year', startYear).set('hour', startHour).set('minute', startMinute)

    console.log(startFullDate)

    const endDay = dayjs(endDate).get('date')
    const endMonth = dayjs(endDate).get('month')
    const endYear = dayjs(endDate).get('year')
    const endHour = dayjs(endTime).get('hour')
    const endMinute = dayjs(endTime).get('minute')

    const endFullDate = dayjs(endDate).set('date', endDay).set('month', endMonth).set('year', endYear).set('hour', endHour).set('minute', endMinute)

    console.log(endFullDate)

    const result = startFullDate.diff(endFullDate, 'minute')

    let diffRes = undefined;

    if (result > 0) {
      diffRes = result
      setResultMinutes(diffRes)
    } else {
      diffRes = Math.abs(result)
      setResultMinutes(diffRes)
    }


    setOpened(true)
    // console.log(Math.round(diffRes / 60))
    // console.log(diffRes % 60)
  }

  return (
   <>
   <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Добавление времени"
      >
        <Text>{`Позывной: ${name}`}</Text>
        <Text>{`Отработанное время: ${Math.round(resultMinutes / 60)} ч., ${resultMinutes % 60} м.`}</Text>
      </Modal>
     <form className={classes.form}>
      <TextInput label="Введите позывной" value={name} onChange={(e) => setName(e.target.value)} />
      <DatePicker
        mt="sm"
        label="Введите дату начала смены"
        inputFormat="DD MMMM,YYYY"
        locale="ru"
        value={startDate}
        onChange={setStartDate}
      />
      <TimeInput
        mt="sm"
        label="Введите время начала смены"
        value={startTime}
        onChange={setStartTime}
      />
      <DatePicker
        mt="sm"
        label="Введите дату конца смены"
        inputFormat="DD MMMM,YYYY"
        locale="ru"
        value={endDate}
        onChange={setEndDate}
      />
      <TimeInput
        mt="sm"
        label="Введите время конца смены"
        value={endTime}
        onChange={setEndTime}
      />
      <Button mt="md" onClick={timeHandler}>Добавить время</Button>
    </form>
   </>
  );
};
