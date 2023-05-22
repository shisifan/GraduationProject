import { IconUserCircle, IconKey } from "@douyinfe/semi-icons";
import {
  ArrayField,
  Button,
  Form,
  Modal,
  Table,
  TextArea,
  Toast,
  useFormState,
} from "@douyinfe/semi-ui";
import React, {
  Component,
  memo,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { IconPlusCircle, IconMinusCircle } from "@douyinfe/semi-icons";
import { Link } from "react-router-dom";
import "./index.scss";
import axios from "axios";
import moment from "moment";

interface AddModalIProps {
  title: string;
  status: number;
  addVisible: any;
  setAddVisible: any;
}
const AddModal = (props: AddModalIProps) => {
  const { title, status, addVisible, setAddVisible } = props;
  const formApi = useRef();
  const formState = useFormState();
  const [basicData, setBasicData] = useState({});
  const handleSelectChange = (value: any) => {
    let text = value === "male" ? "Hi male" : "Hi female!";
  };
  const addHandleOk = async () => {
    try {
      const token = window.localStorage.getItem("token");
      const res = await axios.post(
        "https://3j783p6226.zicp.fun/shisifan/e_user/add",
        basicData,
        {
          headers: {
            token: token,
          },
        }
      );
      if (res?.data?.data) {
        Toast.success(res?.data?.msg);
      } else {
        Toast.warning(res?.data?.msg);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setAddVisible(false);
    }
  };
  const addHandleCancel = () => {
    setAddVisible(false);
  };
  const getFormApi = (value: any) => {
    formApi.current = value;
  };
  const onValueChange = (value: any) => {
    const arr = {
      ...value,
      status: status,
      tests: value?.tests?.map(
        (item: {
          testTime: moment.MomentInput;
          CTResult: any;
          testResult: any;
        }) => {
          return {
            testTime: moment(item?.testTime).format("yyyy-MM-DD"),
            CTResult: item?.CTResult,
            testResult: item?.testResult,
          };
        }
      ),
    };
    setBasicData(arr);
  };

  return (
    <Modal
      centered
      width={500}
      visible={addVisible}
      onOk={addHandleOk}
      onCancel={addHandleCancel}
      closeOnEsc={true}
    >
      <div className="addModal-content">
        <div className="addModal-content-title">{title}</div>
        <div className="addModal-content-form">
          <Form getFormApi={getFormApi} onValueChange={onValueChange}>
            <Form.Input
              rules={[{ required: true, message: "这是必填项" }]}
              field="username"
              label="用户名"
              trigger="blur"
            ></Form.Input>
            <Form.Input
              rules={[{ required: true, message: "这是必填项" }]}
              field="idCard"
              label="身份证号"
              trigger="blur"
            ></Form.Input>
            <Form.Select
              rules={[{ required: true, message: "这是必填项" }]}
              field="gender"
              label="性别"
              onChange={handleSelectChange}
              style={{ width: "100%" }}
            >
              <Form.Select.Option value="男">男</Form.Select.Option>
              <Form.Select.Option value="女">女</Form.Select.Option>
            </Form.Select>
            <Form.Input
              rules={[{ required: true, message: "这是必填项" }]}
              field="address"
              label="家庭地址"
              trigger="blur"
            ></Form.Input>
            <Form.Input
              rules={[{ required: true, message: "这是必填项" }]}
              field="epidemicFrom"
              label="疑似感染来源"
              trigger="blur"
            ></Form.Input>
            <ArrayField field="tests">
              {({ add, arrayFields, addWithInitValue }) => (
                <React.Fragment>
                  <Button onClick={add} icon={<IconPlusCircle />} theme="light">
                    添加核酸历史记录
                  </Button>
                  {arrayFields.map(({ field, key, remove }, i) => {
                    return (
                      <div key={key} style={{ display: "flex" }}>
                        <Form.DatePicker
                          field={`${field}[testTime]`}
                          label={`核酸检测时间`}
                          style={{ width: 130, marginRight: 12 }}
                        />
                        <Form.Select
                          field={`${field}[testResult]`}
                          label={`核酸检测结果`}
                          style={{ width: 110, marginRight: 12 }}
                          optionList={[
                            { label: "阳性", value: "阳性" },
                            { label: "阴性", value: "阴性" },
                          ]}
                        ></Form.Select>
                        <Form.Select
                          field={`${field}[CTResult]`}
                          label={`CT检测结果`}
                          style={{ width: 110 }}
                          optionList={[
                            { label: "阳性", value: "阳性" },
                            { label: "阴性", value: "阴性" },
                          ]}
                        ></Form.Select>
                        <Button
                          type="danger"
                          theme="borderless"
                          icon={<IconMinusCircle />}
                          onClick={remove}
                          style={{ marginTop: 12 }}
                        />
                      </div>
                    );
                  })}
                </React.Fragment>
              )}
            </ArrayField>
          </Form>
        </div>
      </div>
    </Modal>
  );
};
export default AddModal;
