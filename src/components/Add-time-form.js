import "dayjs/locale/ru";
import { useEffect, useState} from "react";
import { DatePicker, TimeInput } from "@mantine/dates";
import { createStyles, TextInput, Button, Text, Modal, Group } from "@mantine/core";
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
  const [timeArr, setTimeArr] = useState([])
  const [name, setName] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [resultMinutes, setResultMinutes] = useState();
  const [opened, setOpened] = useState(false);

  const { classes } = useStyles();

  const data = [
    {name: '96', time: [360, 360, 360]},
    {name: '33', time: [240, 60, 240]},
    {name: '2', time: [180, 360, 240]}
  ]

  function timeHandler() {

    const startDay = dayjs(startDate).get('date')
    const startMonth = dayjs(startDate).get('month')
    const startYear = dayjs(startDate).get('year')
    const startHour = dayjs(startTime).get('hour')
    const startMinute = dayjs(startTime).get('minute')

    const startFullDate = dayjs(startDate).set('date', startDay).set('month', startMonth).set('year', startYear).set('hour', startHour).set('minute', startMinute)

    const endDay = dayjs(endDate).get('date')
    const endMonth = dayjs(endDate).get('month')
    const endYear = dayjs(endDate).get('year')
    const endHour = dayjs(endTime).get('hour')
    const endMinute = dayjs(endTime).get('minute')

    const endFullDate = dayjs(endDate).set('date', endDay).set('month', endMonth).set('year', endYear).set('hour', endHour).set('minute', endMinute)

    const result = startFullDate.diff(endFullDate, 'minute')

    if (result > 0) {
      setResultMinutes(result)
    } else {
      setResultMinutes(Math.abs(result))
    }

    setOpened(true)
    // console.log(Math.round(diffRes / 60))
    // console.log(diffRes % 60)
  }

  function pushHandler() {
    const arr = [...timeArr, resultMinutes]
    setTimeArr(arr)
    setOpened(false)
  }

  useEffect(() => {
    console.log(timeArr);
  }, [timeArr]);

  return (
   <>
   <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="???????????????????? ??????????????"
      >
        <Text>{`????????????????: ${name}`}</Text>
        <Text>{`???????????????????????? ??????????: ${Math.round(resultMinutes / 60)} ??., ${resultMinutes % 60} ??.`}</Text>
        <Group position="center">
          <Button mt="md" onClick={() => pushHandler()}>???????????????? ????????</Button>
        </Group>
      </Modal>
     <form className={classes.form}>
      <TextInput label="?????????????? ????????????????" value={name} onChange={(e) => setName(e.target.value)} />
      <DatePicker
        mt="sm"
        label="?????????????? ???????? ???????????? ??????????"
        inputFormat="DD MMMM,YYYY"
        locale="ru"
        value={startDate}
        onChange={setStartDate}
      />
      <TimeInput
        mt="sm"
        label="?????????????? ?????????? ???????????? ??????????"
        value={startTime}
        onChange={setStartTime}
      />
      <DatePicker
        mt="sm"
        label="?????????????? ???????? ?????????? ??????????"
        inputFormat="DD MMMM,YYYY"
        locale="ru"
        value={endDate}
        onChange={setEndDate}
      />
      <TimeInput
        mt="sm"
        label="?????????????? ?????????? ?????????? ??????????"
        value={endTime}
        onChange={setEndTime}
      />
      <Button mt="md" onClick={timeHandler}>???????????????? ??????????</Button>
    </form>
   </>
  );
};
