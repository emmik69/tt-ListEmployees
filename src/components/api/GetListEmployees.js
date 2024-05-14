import { $host } from '.';

const GetListEmployees = async (qparemetr) => {
  const { data } = await $host.get(`api/Employee${qparemetr}`);
  return data;
};

export default GetListEmployees;
