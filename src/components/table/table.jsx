import RowNum from "./rowNum";
import TableHead from "./tableHead";
import TableRow from "./TableRow";
import TableNavBar from "./tableNavbar";
import { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";

// motion
import { motion } from "framer-motion";

// mui icons
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import VpnKeyOutlinedIcon from "@mui/icons-material/VpnKeyOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import { Toaster } from "react-hot-toast";
import AlertTailwind from "../alert/alert";

// loading
// pagination
// get data
// responsive
// refactor drop down

const dummyData = {
  data: {
    pageIndex: 2,
    pageSize: 20,
    totalCount: 39,
    totalPages: 10,
    indexFrom: 0,
    items: [
      {
        userId: "817115ce-e18c-409e-3cc1-08db07469141",
        userName: "0229570909",
        personelCode: null,
        firstName: "mohammad",
        lastName: "amozad",
        fatherName: null,
        gender: false,
        email: null,
        mobile: "09015577287",
        nationalCode: "0229570909",
        birthDate: null,
        signFileId: null,
        avatarFileId: null,
        twoFactorEnabled: true,
        type: 0,
        status: 0,
        userSystems: [
          {
            id: "57cf3bc1-99ff-4875-b8b9-08db07469dc6",
            organizationSystemUnitRoleId:
              "0328607a-b677-4029-8351-08dad14c9b3d",
            organizationSystemName: "رسانه بازار",
            provinceId: null,
            provinceName: null,
            provinceCode: null,
            endDate: null,
            startDate: null,
          },
        ],
      },
      {
        userId: "80818dbc-67ce-441a-9a61-08db0380bbb6",
        userName: "0924944021",
        personelCode: null,
        firstName: null,
        lastName: null,
        fatherName: null,
        gender: false,
        email: null,
        mobile: "09105966069",
        nationalCode: "0924944021",
        birthDate: null,
        signFileId: null,
        avatarFileId: null,
        twoFactorEnabled: false,
        type: 0,
        status: 1,
        userSystems: [
          {
            id: "294eb2c9-8e4f-43ab-00f3-08db0380d327",
            organizationSystemUnitRoleId:
              "0328607a-b677-4029-8351-08dad14c9b3d",
            organizationSystemName: "رسانه بازار",
            provinceId: null,
            provinceName: null,
            provinceCode: null,
            endDate: null,
            startDate: null,
          },
        ],
      },
      {
        userId: "c8ddbeb6-e847-4627-df64-08dacd5ee524",
        userName: "0080907156",
        personelCode: "2474",
        firstName: "علی ",
        lastName: "ساریچلو",
        fatherName: "کریم",
        gender: true,
        email: null,
        mobile: "09124464804",
        nationalCode: "0080907156",
        birthDate: null,
        signFileId: null,
        avatarFileId: null,
        twoFactorEnabled: false,
        type: 0,
        status: 1,
        userSystems: [],
      },
      {
        userId: "702ba76c-8672-4a87-df63-08dacd5ee524",
        userName: "1219918350",
        personelCode: "14677",
        firstName: "عرفانه",
        lastName: "ساریچلو",
        fatherName: "کریم",
        gender: false,
        email: "erfaneh.s7713@gmail..com",
        mobile: "09128215390",
        nationalCode: "1219918350",
        birthDate: "1998-09-05T00:00:00",
        signFileId: null,
        avatarFileId: null,
        twoFactorEnabled: false,
        type: 0,
        status: 1,
        userSystems: [
          {
            id: "c5275b6f-867a-4275-601c-08dacd6acc2a",
            organizationSystemUnitRoleId:
              "03171e91-c098-445b-d1fd-08dacd64a74c",
            organizationSystemName: "گزارش ساززز",
            provinceId: null,
            provinceName: null,
            provinceCode: null,
            endDate: null,
            startDate: null,
          },
          {
            id: "388af244-6d5e-49a3-601d-08dacd6acc2a",
            organizationSystemUnitRoleId:
              "e8939ac3-48e0-46d2-d1fc-08dacd64a74c",
            organizationSystemName: "مدیریت فایل خ",
            provinceId: null,
            provinceName: null,
            provinceCode: null,
            endDate: null,
            startDate: null,
          },
          {
            id: "2804a859-3dd6-4f88-601e-08dacd6acc2a",
            organizationSystemUnitRoleId:
              "9f829ba6-7488-490b-d1fb-08dacd64a74c",
            organizationSystemName: "ادمین فایل",
            provinceId: null,
            provinceName: null,
            provinceCode: null,
            endDate: null,
            startDate: null,
          },
          {
            id: "c3f1c8ea-98eb-4f8e-601f-08dacd6acc2a",
            organizationSystemUnitRoleId:
              "b419b07a-54f3-48e6-d1fa-08dacd64a74c",
            organizationSystemName: "مدیریت فایل برون سازمانی غیر فعال",
            provinceId: null,
            provinceName: null,
            provinceCode: null,
            endDate: null,
            startDate: null,
          },
          {
            id: "00738526-296f-4ca5-6020-08dacd6acc2a",
            organizationSystemUnitRoleId:
              "a8c8fcf7-6f29-46c5-d1f9-08dacd64a74c",
            organizationSystemName: "bpmn",
            provinceId: null,
            provinceName: null,
            provinceCode: null,
            endDate: null,
            startDate: null,
          },
          {
            id: "bdc01882-8dfc-42a7-6021-08dacd6acc2a",
            organizationSystemUnitRoleId:
              "7517a906-a92b-4181-d1f8-08dacd64a74c",
            organizationSystemName: "اطلاع رسانییی",
            provinceId: null,
            provinceName: null,
            provinceCode: null,
            endDate: null,
            startDate: null,
          },
          {
            id: "ca97693c-368a-40ae-6022-08dacd6acc2a",
            organizationSystemUnitRoleId:
              "055f1e6b-2323-4b56-d1f7-08dacd64a74c",
            organizationSystemName: "مدیریت کاربراننن",
            provinceId: null,
            provinceName: null,
            provinceCode: null,
            endDate: null,
            startDate: null,
          },
        ],
      },
      {
        userId: "7e721682-1dcf-4c46-5e46-08dac6d1c32a",
        userName: "4000000004",
        personelCode: "9996",
        firstName: "سعید",
        lastName: "معروفی",
        fatherName: null,
        gender: true,
        email: null,
        mobile: "09373576025",
        nationalCode: "4000000004",
        birthDate: null,
        signFileId: null,
        avatarFileId: null,
        twoFactorEnabled: false,
        type: 0,
        status: 1,
        userSystems: [
          {
            id: "5c3e1dcb-4a68-4400-6fe8-08db82da1fc0",
            organizationSystemUnitRoleId:
              "bd2850d9-3df0-48cc-454d-08db1d6877d8",
            organizationSystemName: "تیکت جدید",
            provinceId: null,
            provinceName: null,
            provinceCode: null,
            endDate: null,
            startDate: null,
          },
        ],
      },
      {
        userId: "8c2887c3-cbbf-42eb-ec08-08dabb1d47a3",
        userName: "7000000007",
        personelCode: "7000000007",
        firstName: "شیوا",
        lastName: "دارابی",
        fatherName: null,
        gender: false,
        email: null,
        mobile: "09373577026",
        nationalCode: "7000000007",
        birthDate: null,
        signFileId: null,
        avatarFileId: null,
        twoFactorEnabled: false,
        type: 0,
        status: 1,
        userSystems: [
          {
            id: "8c0acf18-23c9-4dec-1d8d-08db722cef9e",
            organizationSystemUnitRoleId:
              "2c380ede-a92c-45e9-171b-08da8f140642",
            organizationSystemName: "مدیریت فایل",
            provinceId: null,
            provinceName: null,
            provinceCode: null,
            endDate: null,
            startDate: null,
          },
          {
            id: "d287969f-b133-4942-1d8e-08db722cef9e",
            organizationSystemUnitRoleId:
              "d8296f49-773e-4952-8235-08daab6051ee",
            organizationSystemName: "مدیریت فایل برون سازمانی",
            provinceId: "6dc91922-d68c-4174-a2f3-5b366ed8e4bc",
            provinceName: "تهران",
            provinceCode: "100",
            endDate: null,
            startDate: null,
          },
        ],
      },
      {
        userId: "b3dc4323-4e61-48d8-9828-08dab1c736f6",
        userName: "6000000006",
        personelCode: "1456",
        firstName: "کاربر",
        lastName: "ITSM",
        fatherName: "مشیری",
        gender: true,
        email: "Tabatabaei@Tehranbs.ir",
        mobile: "09121111111",
        nationalCode: "6000000006",
        birthDate: "2022-10-23T00:00:00",
        signFileId: null,
        avatarFileId: "d17d9541-c729-4be1-6dbb-08dab4ba1c09",
        twoFactorEnabled: false,
        type: 0,
        status: 1,
        userSystems: [
          {
            id: "e5123d9f-f80d-4616-0ba6-08dab4e6813a",
            organizationSystemUnitRoleId:
              "67eb30d9-c930-4ab3-9f96-08da8b366939",
            organizationSystemName: "تیکت",
            provinceId: null,
            provinceName: null,
            provinceCode: null,
            endDate: null,
            startDate: null,
          },
          {
            id: "4f2286cc-1724-4267-0ba7-08dab4e6813a",
            organizationSystemUnitRoleId:
              "de224057-3bf9-45dc-9f97-08da8b366939",
            organizationSystemName: "دارایی",
            provinceId: null,
            provinceName: null,
            provinceCode: null,
            endDate: null,
            startDate: null,
          },
          {
            id: "27fbf82f-2dc9-4244-0ba8-08dab4e6813a",
            organizationSystemUnitRoleId:
              "cb15ff09-c803-48d3-b659-08daaec9286a",
            organizationSystemName: "مدیریت کاربران",
            provinceId: null,
            provinceName: null,
            provinceCode: null,
            endDate: null,
            startDate: null,
          },
          {
            id: "749d37fe-8ade-49e8-0ba9-08dab4e6813a",
            organizationSystemUnitRoleId:
              "59faed89-de3a-476a-2865-08dab1c0938f",
            organizationSystemName: "ITSM Modules",
            provinceId: null,
            provinceName: null,
            provinceCode: null,
            endDate: null,
            startDate: null,
          },
          {
            id: "2f8147f7-0d8f-4a22-0baa-08dab4e6813a",
            organizationSystemUnitRoleId:
              "54a6fc5f-7d22-4934-285c-08dab1c0938f",
            organizationSystemName: "مدیریت دانش",
            provinceId: null,
            provinceName: null,
            provinceCode: null,
            endDate: null,
            startDate: null,
          },
          {
            id: "31d762cf-685d-45e0-0bab-08dab4e6813a",
            organizationSystemUnitRoleId:
              "eb595824-6754-4a5d-285a-08dab1c0938f",
            organizationSystemName: "نسخه‌گذاری",
            provinceId: null,
            provinceName: null,
            provinceCode: null,
            endDate: null,
            startDate: null,
          },
          {
            id: "6a50add9-04be-4b3a-0bac-08dab4e6813a",
            organizationSystemUnitRoleId:
              "d4af64e6-2ff2-4ed4-2859-08dab1c0938f",
            organizationSystemName: "برنامه عملیاتی",
            provinceId: null,
            provinceName: null,
            provinceCode: null,
            endDate: null,
            startDate: null,
          },
          {
            id: "acb65fde-521a-4b53-0bad-08dab4e6813a",
            organizationSystemUnitRoleId:
              "340728bb-904f-4bdf-2858-08dab1c0938f",
            organizationSystemName: "رخدادها",
            provinceId: null,
            provinceName: null,
            provinceCode: null,
            endDate: null,
            startDate: null,
          },
          {
            id: "124fb308-87a4-4951-0bae-08dab4e6813a",
            organizationSystemUnitRoleId:
              "db059ebd-d714-48aa-2857-08dab1c0938f",
            organizationSystemName: "ارزیابی کارکنان",
            provinceId: null,
            provinceName: null,
            provinceCode: null,
            endDate: null,
            startDate: null,
          },
        ],
      },
      {
        userId: "1a13f8ae-5446-4e2a-e7f4-08dab0dd7fa4",
        userName: "0021417288",
        personelCode: "1377",
        firstName: "عرفانه",
        lastName: "ساریچلو",
        fatherName: "کریم",
        gender: false,
        email: "erfaneh.s7713@gmail..com",
        mobile: "09128215390",
        nationalCode: "0021417288",
        birthDate: null,
        signFileId: null,
        avatarFileId: null,
        twoFactorEnabled: false,
        type: 0,
        status: 1,
        userSystems: [
          {
            id: "92b93d2d-bb44-47ba-cb2b-08db4a0ed43b",
            organizationSystemUnitRoleId:
              "5cd97337-07ca-4649-46c2-08db4a1a8563",
            organizationSystemName: "lms",
            provinceId: null,
            provinceName: null,
            provinceCode: null,
            endDate: null,
            startDate: null,
          },
          {
            id: "2798256c-aafb-4830-cb2c-08db4a0ed43b",
            organizationSystemUnitRoleId:
              "61682c07-b97f-453e-46c4-08db4a1a8563",
            organizationSystemName: "lms",
            provinceId: null,
            provinceName: null,
            provinceCode: null,
            endDate: null,
            startDate: null,
          },
          {
            id: "ee85c0ce-c975-4b0a-cb2d-08db4a0ed43b",
            organizationSystemUnitRoleId:
              "ae555e88-efc1-4895-46c3-08db4a1a8563",
            organizationSystemName: "lms",
            provinceId: null,
            provinceName: null,
            provinceCode: null,
            endDate: null,
            startDate: null,
          },
          {
            id: "6c9e5919-73fc-41fe-cb2e-08db4a0ed43b",
            organizationSystemUnitRoleId:
              "f5c18e45-a728-4a30-1f6e-08dabc9c5da7",
            organizationSystemName: "مدیریت فایل",
            provinceId: null,
            provinceName: null,
            provinceCode: null,
            endDate: null,
            startDate: null,
          },
          {
            id: "f826efc3-c0df-4cc5-cb2f-08db4a0ed43b",
            organizationSystemUnitRoleId:
              "0fe5f59e-89c6-444c-4b3d-08dafc42cea2",
            organizationSystemName: "lms",
            provinceId: null,
            provinceName: null,
            provinceCode: null,
            endDate: null,
            startDate: null,
          },
          {
            id: "ab0cf133-306a-47b6-cb30-08db4a0ed43b",
            organizationSystemUnitRoleId:
              "4f44b6fa-94a1-41e4-194c-08dab0d9fee3",
            organizationSystemName: "ITSM",
            provinceId: null,
            provinceName: null,
            provinceCode: null,
            endDate: null,
            startDate: null,
          },
        ],
      },
      {
        userId: "8d1874fe-2a0a-443b-44c4-08daa534d2bb",
        userName: "9876543210",
        personelCode: "9876543210",
        firstName: "اقای",
        lastName: "شهیدی",
        fatherName: "حسین",
        gender: true,
        email: null,
        mobile: "09876543210",
        nationalCode: "9876543210",
        birthDate: null,
        signFileId: null,
        avatarFileId: "1ef8fd3b-7541-4eb2-54b3-08daaa952f42",
        twoFactorEnabled: true,
        type: 0,
        status: 1,
        userSystems: [],
      },
      {
        userId: "8b55e384-5fcc-4b8c-6a1d-08daa3a9974f",
        userName: "0021236941",
        personelCode: "0021236914",
        firstName: "مهسا",
        lastName: "موسوی",
        fatherName: "صادق",
        gender: true,
        email: "mahsaa.mousavi@yahoo.com",
        mobile: "0021236942",
        nationalCode: "0021236941",
        birthDate: "2020-12-31T00:00:00",
        signFileId: null,
        avatarFileId: "eeeeb0c9-d551-4489-4f6b-08daa3ab98c3",
        twoFactorEnabled: false,
        type: 0,
        status: 1,
        userSystems: [
          {
            id: "66d32531-cad5-4ac7-40d8-08daaa924fb5",
            organizationSystemUnitRoleId:
              "67eb30d9-c930-4ab3-9f96-08da8b366939",
            organizationSystemName: "تیکت",
            provinceId: null,
            provinceName: null,
            provinceCode: null,
            endDate: "2023-10-10T00:00:00",
            startDate: "2022-10-10T00:00:00",
          },
        ],
      },
      {
        userId: "d07d8f41-f239-470a-7f19-08daa3a3bfdd",
        userName: "1000000001",
        personelCode: "1234587",
        firstName: "محمد",
        lastName: "مشیری",
        fatherName: null,
        gender: true,
        email: null,
        mobile: "09122821929",
        nationalCode: "1000000001",
        birthDate: null,
        signFileId: null,
        avatarFileId: "b64b8e20-d77c-4d3b-2923-08daa3a3bfd3",
        twoFactorEnabled: false,
        type: 0,
        status: 1,
        userSystems: [
          {
            id: "a9027543-782a-4a38-1d8c-08db722cef9e",
            organizationSystemUnitRoleId:
              "2c380ede-a92c-45e9-171b-08da8f140642",
            organizationSystemName: "مدیریت فایل",
            provinceId: null,
            provinceName: null,
            provinceCode: null,
            endDate: null,
            startDate: null,
          },
        ],
      },
      {
        userId: "e50d500d-08a1-4828-8dbc-08da93b51985",
        userName: "4190513571",
        personelCode: "3254623",
        firstName: "شایان",
        lastName: "آزادبخت",
        fatherName: null,
        gender: true,
        email: null,
        mobile: "09160186390",
        nationalCode: "4190513571",
        birthDate: "1998-09-11T00:00:00",
        signFileId: null,
        avatarFileId: "a44e81a0-8bde-4786-b15b-08da93b51975",
        twoFactorEnabled: false,
        type: 0,
        status: 1,
        userSystems: [
          {
            id: "e522ef9f-77fa-4642-5e8e-08daf2e7712d",
            organizationSystemUnitRoleId:
              "f5c18e45-a728-4a30-1f6e-08dabc9c5da7",
            organizationSystemName: "مدیریت فایل",
            provinceId: null,
            provinceName: null,
            provinceCode: null,
            endDate: null,
            startDate: null,
          },
          {
            id: "f9d4bd08-fe13-49de-5e8f-08daf2e7712d",
            organizationSystemUnitRoleId:
              "67eb30d9-c930-4ab3-9f96-08da8b366939",
            organizationSystemName: "تیکت",
            provinceId: null,
            provinceName: null,
            provinceCode: null,
            endDate: "2023-09-11T00:00:00",
            startDate: "2022-09-10T00:00:00",
          },
        ],
      },
      {
        userId: "cc1fa886-13af-48e9-98a5-08da90b59adf",
        userName: "9000000009",
        personelCode: "11",
        firstName: "محسن",
        lastName: "آذر",
        fatherName: null,
        gender: true,
        email: null,
        mobile: "09121111111",
        nationalCode: "9000000009",
        birthDate: "1968-09-07T00:00:00",
        signFileId: null,
        avatarFileId: "a776dd2a-fe93-4e7a-a028-08da99655d1a",
        twoFactorEnabled: false,
        type: 0,
        status: 1,
        userSystems: [
          {
            id: "9091c8a2-ee85-459f-862e-08dafc77192b",
            organizationSystemUnitRoleId:
              "b1218996-9ba7-4f47-2866-08dab1c0938f",
            organizationSystemName: "برنامه عملیاتی",
            provinceId: null,
            provinceName: null,
            provinceCode: null,
            endDate: null,
            startDate: null,
          },
          {
            id: "0d1dc4a1-8da6-437e-862f-08dafc77192b",
            organizationSystemUnitRoleId:
              "6dc91922-d68c-4174-a2f3-5b366ed8e4bc",
            organizationSystemName: "مدیریت کاربران",
            provinceId: null,
            provinceName: null,
            provinceCode: null,
            endDate: null,
            startDate: null,
          },
          {
            id: "156b3864-d1ae-4f31-8630-08dafc77192b",
            organizationSystemUnitRoleId:
              "8d558a66-b494-45a3-1701-08da8f140642",
            organizationSystemName: "مدیریت کاربران",
            provinceId: null,
            provinceName: null,
            provinceCode: null,
            endDate: null,
            startDate: null,
          },
          {
            id: "7dad6b62-0eb6-49a0-8631-08dafc77192b",
            organizationSystemUnitRoleId:
              "a5812b84-c624-40bd-9f91-08da8b366939",
            organizationSystemName: "تیکت",
            provinceId: null,
            provinceName: null,
            provinceCode: null,
            endDate: "2023-09-07T00:00:00",
            startDate: "2022-09-07T00:00:00",
          },
        ],
      },
      {
        userId: "0d3a6ec0-abef-4ce0-ff7e-08da8ff02a7a",
        userName: "0199367183",
        personelCode: "800",
        firstName: "مدیر",
        lastName: "مانیتورینگ",
        fatherName: null,
        gender: true,
        email: null,
        mobile: "09392689737",
        nationalCode: "0199367183",
        birthDate: "2022-09-06T00:00:00",
        signFileId: "58d1f54c-321c-4da2-fdd5-08da90ce31cb",
        avatarFileId: "110a974b-aeeb-4afd-fdd4-08da90ce31cb",
        twoFactorEnabled: false,
        type: 0,
        status: 1,
        userSystems: [
          {
            id: "4d28f95b-027a-4b3b-0f75-08da90d03c84",
            organizationSystemUnitRoleId:
              "8145eae6-dee5-4720-43bd-08da8feefa0a",
            organizationSystemName: "مانتیورینگ مدیریت فایل",
            provinceId: null,
            provinceName: null,
            provinceCode: null,
            endDate: null,
            startDate: null,
          },
        ],
      },
      {
        userId: "e5b9dc13-d979-429e-ac84-08da8f4e26fc",
        userName: "3000000003",
        personelCode: "100002",
        firstName: "Mahdiyeh",
        lastName: "fa",
        fatherName: "اا",
        gender: false,
        email: "john.doe@cssninja.io",
        mobile: "09191825822",
        nationalCode: "3000000003",
        birthDate: "2022-09-05T00:00:00",
        signFileId: "e7af45eb-5cdc-4b38-ed42-08da8f4734ef",
        avatarFileId: "c6148030-4062-4da7-5346-08db723f9fe9",
        twoFactorEnabled: false,
        type: 0,
        status: 1,
        userSystems: [
          {
            id: "b8e2bcf7-39ca-46e9-0938-08db964de743",
            organizationSystemUnitRoleId:
              "2c380ede-a92c-45e9-171b-08da8f140642",
            organizationSystemName: "مدیریت فایل",
            provinceId: null,
            provinceName: null,
            provinceCode: null,
            endDate: null,
            startDate: null,
          },
          {
            id: "4032ecec-9936-485e-0939-08db964de743",
            organizationSystemUnitRoleId:
              "af515e70-f3b8-483b-fefe-08dabfd9680b",
            organizationSystemName: "مدیریت فایل",
            provinceId: null,
            provinceName: null,
            provinceCode: null,
            endDate: null,
            startDate: null,
          },
          {
            id: "38d62eda-0a22-443a-093a-08db964de743",
            organizationSystemUnitRoleId:
              "b595ec56-2021-45ac-7076-08da8e30a8a4",
            organizationSystemName: "دیده بان",
            provinceId: null,
            provinceName: null,
            provinceCode: null,
            endDate: null,
            startDate: null,
          },
          {
            id: "8aee7921-bdee-4e38-093b-08db964de743",
            organizationSystemUnitRoleId:
              "2c380ede-a92c-45e9-171b-08da8f140642",
            organizationSystemName: "مدیریت فایل",
            provinceId: null,
            provinceName: null,
            provinceCode: null,
            endDate: null,
            startDate: null,
          },
          {
            id: "f3cbc048-2ae1-402f-093c-08db964de743",
            organizationSystemUnitRoleId:
              "0129cc7c-d886-4af7-1f71-08dabc9c5da7",
            organizationSystemName: "ادمین فایل منیجر",
            provinceId: null,
            provinceName: null,
            provinceCode: null,
            endDate: null,
            startDate: null,
          },
        ],
      },
      {
        userId: "ba42f241-6bac-4dbe-542f-08da8e376e79",
        userName: "2300132575",
        personelCode: "100",
        firstName: "امین",
        lastName: "مغناطیسی",
        fatherName: "عبداله",
        gender: true,
        email: "shirazi9730@gmail.com",
        mobile: "09178998456",
        nationalCode: "2300132575",
        birthDate: "2023-03-01T12:54:58.501",
        signFileId: null,
        avatarFileId: null,
        twoFactorEnabled: false,
        type: 0,
        status: 1,
        userSystems: [
          {
            id: "7e3472d4-cfa8-476f-e6f2-08dbb833caf2",
            organizationSystemUnitRoleId:
              "af515e70-f3b8-483b-fefe-08dabfd9680b",
            organizationSystemName: "مدیریت فایل",
            provinceId: null,
            provinceName: null,
            provinceCode: null,
            endDate: null,
            startDate: null,
          },
        ],
      },
      {
        userId: "bb390e84-d3a7-4563-10d9-08da8da7c00e",
        userName: "0021742741",
        personelCode: "600",
        firstName: "یاسمین",
        lastName: "دلاوری",
        fatherName: null,
        gender: false,
        email: null,
        mobile: "09197654984",
        nationalCode: "0021742741",
        birthDate: "1998-12-28T00:00:00",
        signFileId: null,
        avatarFileId: null,
        twoFactorEnabled: false,
        type: 0,
        status: 1,
        userSystems: [
          {
            id: "19354e0b-bfcf-4e33-2bab-08dbae05087a",
            organizationSystemUnitRoleId:
              "b595ec56-2021-45ac-7076-08da8e30a8a4",
            organizationSystemName: "دیده بان",
            provinceId: null,
            provinceName: null,
            provinceCode: null,
            endDate: null,
            startDate: null,
          },
          {
            id: "ca03116b-3c8d-4798-2bac-08dbae05087a",
            organizationSystemUnitRoleId:
              "b595ec56-2021-45ac-7076-08da8e30a8a4",
            organizationSystemName: "دیده بان",
            provinceId: null,
            provinceName: null,
            provinceCode: null,
            endDate: null,
            startDate: null,
          },
        ],
      },
      {
        userId: "4c658db4-21da-4586-c83c-08da8b3c7a01",
        userName: "2000000002",
        personelCode: "500",
        firstName: "علی",
        lastName: "مهربان",
        fatherName: null,
        gender: true,
        email: "rahimin634@gmail.com",
        mobile: "09160186390",
        nationalCode: "2000000002",
        birthDate: "2023-08-31T00:00:00",
        signFileId: "ef65f1bc-8dcc-4754-e657-08da8b4508b6",
        avatarFileId: "28b28893-d391-4861-469a-08da90b59ac8",
        twoFactorEnabled: false,
        type: 0,
        status: 1,
        userSystems: [
          {
            id: "7cefa6c2-4d92-4be5-e617-08dbc4d11c9f",
            organizationSystemUnitRoleId:
              "e8939ac3-48e0-46d2-d1fc-08dacd64a74c",
            organizationSystemName: "مدیریت فایل خ",
            provinceId: null,
            provinceName: null,
            provinceCode: null,
            endDate: null,
            startDate: null,
          },
          {
            id: "1abec813-92c9-48c4-e618-08dbc4d11c9f",
            organizationSystemUnitRoleId:
              "b595ec56-2021-45ac-7076-08da8e30a8a4",
            organizationSystemName: "دیده بان",
            provinceId: null,
            provinceName: null,
            provinceCode: null,
            endDate: null,
            startDate: null,
          },
          {
            id: "76ed0b77-0344-42ed-e619-08dbc4d11c9f",
            organizationSystemUnitRoleId:
              "55893ed2-1c51-4d25-1f72-08dabc9c5da7",
            organizationSystemName: "ادمین فایل منیجر",
            provinceId: null,
            provinceName: null,
            provinceCode: null,
            endDate: null,
            startDate: null,
          },
          {
            id: "f4b40117-5ae4-48f6-e61a-08dbc4d11c9f",
            organizationSystemUnitRoleId:
              "0129cc7c-d886-4af7-1f71-08dabc9c5da7",
            organizationSystemName: "ادمین فایل منیجر",
            provinceId: null,
            provinceName: null,
            provinceCode: null,
            endDate: null,
            startDate: null,
          },
          {
            id: "2dec4b06-0b55-49b8-e61b-08dbc4d11c9f",
            organizationSystemUnitRoleId:
              "9f829ba6-7488-490b-d1fb-08dacd64a74c",
            organizationSystemName: "ادمین فایل",
            provinceId: null,
            provinceName: null,
            provinceCode: null,
            endDate: null,
            startDate: null,
          },
          {
            id: "b6206e2f-3a20-4df2-e61c-08dbc4d11c9f",
            organizationSystemUnitRoleId:
              "79ea2359-4fa9-4d38-7d7b-08daa05c3454",
            organizationSystemName: "lms",
            provinceId: null,
            provinceName: null,
            provinceCode: null,
            endDate: null,
            startDate: null,
          },
          {
            id: "2d87cb1a-48c0-4fb7-e61d-08dbc4d11c9f",
            organizationSystemUnitRoleId:
              "b1218996-9ba7-4f47-2866-08dab1c0938f",
            organizationSystemName: "برنامه عملیاتی",
            provinceId: null,
            provinceName: null,
            provinceCode: null,
            endDate: null,
            startDate: null,
          },
          {
            id: "c384fd7a-0ad1-4d54-e61e-08dbc4d11c9f",
            organizationSystemUnitRoleId:
              "131425d5-9edd-4ee4-2864-08dab1c0938f",
            organizationSystemName: "نسخه‌گذاری",
            provinceId: null,
            provinceName: null,
            provinceCode: null,
            endDate: null,
            startDate: null,
          },
          {
            id: "8b0768ec-ed25-43b9-e61f-08dbc4d11c9f",
            organizationSystemUnitRoleId:
              "9673e05f-4690-436c-1f74-08dabc9c5da7",
            organizationSystemName: "لوکال 8082",
            provinceId: null,
            provinceName: null,
            provinceCode: null,
            endDate: null,
            startDate: null,
          },
          {
            id: "23eba0df-c777-4750-e620-08dbc4d11c9f",
            organizationSystemUnitRoleId:
              "b419b07a-54f3-48e6-d1fa-08dacd64a74c",
            organizationSystemName: "مدیریت فایل برون سازمانی غیر فعال",
            provinceId: null,
            provinceName: null,
            provinceCode: null,
            endDate: null,
            startDate: null,
          },
          {
            id: "a024df1d-06a6-436d-e621-08dbc4d11c9f",
            organizationSystemUnitRoleId:
              "03171e91-c098-445b-d1fd-08dacd64a74c",
            organizationSystemName: "گزارش ساززز",
            provinceId: null,
            provinceName: null,
            provinceCode: null,
            endDate: null,
            startDate: null,
          },
          {
            id: "3f0411e3-2f18-46c4-e622-08dbc4d11c9f",
            organizationSystemUnitRoleId:
              "ff03b452-72f8-45b2-4d32-08dafc79d88b",
            organizationSystemName: "رسانه بازار",
            provinceId: null,
            provinceName: null,
            provinceCode: null,
            endDate: null,
            startDate: null,
          },
          {
            id: "9687dbb5-72b9-4f75-e623-08dbc4d11c9f",
            organizationSystemUnitRoleId:
              "0b110037-72ef-464f-029a-08dad2c3870a",
            organizationSystemName: "رصد تکالیف",
            provinceId: null,
            provinceName: null,
            provinceCode: null,
            endDate: null,
            startDate: null,
          },
          {
            id: "9ce67827-727b-4b20-e624-08dbc4d11c9f",
            organizationSystemUnitRoleId:
              "86dc0178-494f-4556-029b-08dad2c3870a",
            organizationSystemName: "شکایت و گزارش فساد",
            provinceId: null,
            provinceName: null,
            provinceCode: null,
            endDate: null,
            startDate: null,
          },
          {
            id: "6945d70d-b87a-4969-e625-08dbc4d11c9f",
            organizationSystemUnitRoleId:
              "5b376d7c-20b7-4c52-b630-08daddbe7102",
            organizationSystemName: "سیمرغ",
            provinceId: null,
            provinceName: null,
            provinceCode: null,
            endDate: null,
            startDate: null,
          },
          {
            id: "1feefe76-1b58-433c-e626-08dbc4d11c9f",
            organizationSystemUnitRoleId:
              "bd2850d9-3df0-48cc-454d-08db1d6877d8",
            organizationSystemName: "تیکت جدید",
            provinceId: null,
            provinceName: null,
            provinceCode: null,
            endDate: null,
            startDate: null,
          },
          {
            id: "aebf8d6f-cf70-46f5-e627-08dbc4d11c9f",
            organizationSystemUnitRoleId:
              "2c380ede-a92c-45e9-171b-08da8f140642",
            organizationSystemName: "مدیریت فایل",
            provinceId: null,
            provinceName: null,
            provinceCode: null,
            endDate: null,
            startDate: null,
          },
          {
            id: "a0197fa3-a591-4933-e628-08dbc4d11c9f",
            organizationSystemUnitRoleId:
              "bd2ec69d-a63d-49d6-f257-08db14cd574a",
            organizationSystemName: "مدیریت فایل خ",
            provinceId: null,
            provinceName: null,
            provinceCode: null,
            endDate: null,
            startDate: null,
          },
        ],
      },
      {
        userId: "6dc91922-d68c-4174-a2f3-5b366ed8e4bc",
        userName: "0123456789",
        personelCode: "0123456789",
        firstName: "مدیریت",
        lastName: "اصلی",
        fatherName: null,
        gender: false,
        email: "a@b.c",
        mobile: "09373576025",
        nationalCode: "0123456789",
        birthDate: "2023-03-05T00:00:00",
        signFileId: null,
        avatarFileId: null,
        twoFactorEnabled: false,
        type: 0,
        status: 1,
        userSystems: [
          {
            id: "f6819d3e-38da-4bbe-b763-08da91b0e560",
            organizationSystemUnitRoleId:
              "6dc91922-d68c-4174-a2f3-5b366ed8e4bc",
            organizationSystemName: "مدیریت کاربران",
            provinceId: null,
            provinceName: null,
            provinceCode: null,
            endDate: "2028-01-01T00:00:00",
            startDate: "2021-01-01T00:00:00",
          },
          {
            id: "f7a961d8-ed49-4265-e6e9-08dbb833caf2",
            organizationSystemUnitRoleId:
              "af515e70-f3b8-483b-fefe-08dabfd9680b",
            organizationSystemName: "مدیریت فایل",
            provinceId: null,
            provinceName: null,
            provinceCode: null,
            endDate: null,
            startDate: null,
          },
          {
            id: "de8ecea7-9e72-4679-e6ea-08dbb833caf2",
            organizationSystemUnitRoleId:
              "e6f6e68b-f9ed-47e0-706d-08da8e30a8a4",
            organizationSystemName: "مدیریت فایل برون سازمانی",
            provinceId: null,
            provinceName: null,
            provinceCode: null,
            endDate: null,
            startDate: null,
          },
          {
            id: "28662092-fee3-478d-e6eb-08dbb833caf2",
            organizationSystemUnitRoleId:
              "de224057-3bf9-45dc-9f97-08da8b366939",
            organizationSystemName: "دارایی",
            provinceId: null,
            provinceName: null,
            provinceCode: null,
            endDate: null,
            startDate: null,
          },
          {
            id: "ac7d3364-aa00-4646-e6ec-08dbb833caf2",
            organizationSystemUnitRoleId:
              "61682c07-b97f-453e-46c4-08db4a1a8563",
            organizationSystemName: "lms",
            provinceId: null,
            provinceName: null,
            provinceCode: null,
            endDate: null,
            startDate: null,
          },
          {
            id: "d32e3e7f-253a-47c5-e6ed-08dbb833caf2",
            organizationSystemUnitRoleId:
              "bd2850d9-3df0-48cc-454d-08db1d6877d8",
            organizationSystemName: "تیکت جدید",
            provinceId: null,
            provinceName: null,
            provinceCode: null,
            endDate: null,
            startDate: null,
          },
          {
            id: "569091e5-d7bd-4513-e6ee-08dbb833caf2",
            organizationSystemUnitRoleId:
              "2c380ede-a92c-45e9-171b-08da8f140642",
            organizationSystemName: "مدیریت فایل",
            provinceId: null,
            provinceName: null,
            provinceCode: null,
            endDate: null,
            startDate: null,
          },
          {
            id: "6c60781f-626f-4c26-e6ef-08dbb833caf2",
            organizationSystemUnitRoleId:
              "0129cc7c-d886-4af7-1f71-08dabc9c5da7",
            organizationSystemName: "ادمین فایل منیجر",
            provinceId: null,
            provinceName: null,
            provinceCode: null,
            endDate: null,
            startDate: null,
          },
        ],
      },
    ],
    hasPreviousPage: true,
    hasNextPage: false,
  },
  isSuccess: true,
  message: null,
};
const columns = [
  "firstName",
  "lastName",
  "nationalCode",
  "personelCode",
  "mobile",
  "status",
  "twoFactorEnabled",
  "type",
  "userName",
  "gender",
  "fatherName",
  "birthDate",
  "email",
  "userId",
  "signFileId",
  "avatarFileId",
];
const columsObject = {
  firstName: "نام",
  lastName: "خانوادگی",
  nationalCode: "ملی",
  personelCode: "کاربر",
  mobile: "موبایل",
  status: "وضعیت",
  twoFactorEnabled: "تایید دو مرحله ای",
  type: "نوع",
  userName: "نام کاربری",
  gender: "جنسیت",
  fatherName: "نام پدر",
  birthDate: "نولد",
  email: "ایمیل",
  userId: "ایدب گاریر",
  signFileId: "فیلد",
  avatarFileId: "آئاتار",
};

const Table = () => {
  const numOfRows = [10, 20, 30, 40, 50];
  const [pageIndex, setPageIndex] = useState(1);
  const [searchValue, setSearchValue] = useState("");

  // set the last user order in LS
  const columnOrderFromLocalStorage = localStorage.getItem("columnOrder")
    ? JSON.parse(localStorage.getItem("columnOrder"))
    : localStorage.setItem(
        "columnOrder",
        JSON.stringify([
          {
            id: "1",
            force: true,
            isActive: true,
            content: "نام و نام خانوادگی",
          },
          { id: "2", force: true, isActive: true, content: "کد ملی" },
          { id: "3", force: false, isActive: true, content: "کد پرسنلی" },
          { id: "4", force: false, isActive: true, content: "موبایل" },
          { id: "5", force: false, isActive: true, content: "وضعیت کاربران" },
          { id: "6", force: false, isActive: true, content: "ورود دو مرحله" },
          { id: "7", force: false, isActive: true, content: "نوع کاربر" },
        ])
      );

  const [columnsOrder, setColumnsOrder] = useState(columnOrderFromLocalStorage);

  // check LS data and set some defaults
  let rowNumLocalStorage = localStorage.getItem("rowNum")
    ? localStorage.getItem("rowNum")
    : 10;

  // prevent mannual save data to LS
  if (!numOfRows.includes(+rowNumLocalStorage)) {
    rowNumLocalStorage = 10;
    localStorage.setItem("rowNum", rowNumLocalStorage);
  }

  // page size state
  const [rowNum, setRowNum] = useState(rowNumLocalStorage);

  useEffect(() => {
    // console log row num
    console.log(rowNum);
  }, [rowNum]);

  useEffect(() => {
    const avalibleCol = columnsOrder.filter((col) => col.isActive);
    console.log(avalibleCol);
  }, [columnsOrder]);

  return (
    <>

      <div>
        {/* you should put this component at the laylout your app  */}
        <Toaster  limit={3}/>
      </div>
      <div className="container max-w-7xl mx-auto">
        <TableNavBar
          rowNum={rowNum}
          numOfRows={numOfRows}
          columnsOrder={columnsOrder}
          searchValue={searchValue}
          setRowNum={setRowNum}
          setColumnsOrder={setColumnsOrder}
          setSearchValue={setSearchValue}
        />

        <div className="px-3 overflow-y-scroll max-h-[700px]">
          <div className="max-w-7xl mx-auto bg-white rounded-lg overflow-x-auto border border-gray-200 p-5">
            <table className="w-full table-auto ">
              <TableHead
                columsObject={columsObject}
                columns={columns.slice(2, 8)}
              />

              <tbody>
                {dummyData.data.items.length > 0 &&
                  dummyData.data.items.map((userData, index) => (
                    <TableRow
                      key={index}
                      userData={userData}
                      rowNum={index + 1}
                      columns={columns}
                    />
                  ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="flex justify-center mt-10 relative ">
          <Pagination
            dir="ltr"
            onChange={(e) => setPageIndex(+e.currentTarget.innerText)}
            // set from db response
            count={dummyData.data.totalPages}
            color="primary"
            className=""
            defaultPage={pageIndex}
            // siblingCount={1}
          />
        </div>
      </div>
    </>
  );
};

export default Table;
