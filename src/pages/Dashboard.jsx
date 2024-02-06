import Papa from 'papaparse';
import React, { useEffect, useRef, useState } from 'react';
import Dropdown from './Dropdown';
import Table from './Table'
import SideNav from './SideNav';

function Dashboard() {
  const fileInputRef = useRef(null);
  const [csvFile, setCsvFile] = useState(null);
  const [jsonResult, setJsonResult] = useState();
  const [selectedOption, setSelectedOption] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setCsvFile(file);
  };

  useEffect(() => {
    if (csvFile) {
      Papa.parse(csvFile, {
        complete: (result) => {
          setJsonResult(result.data);
        },
        header: true,
      });
    }
  }, [csvFile]);

  const handleButtonClick = () => {
    fileInputRef?.current?.click();
  };

  const handleSelect = (value) => {
    setSelectedOption(value);
  };
  const columns = [
    {
      title: <span className="font-normal">SL No.</span>,
      dataIndex: 'name',
      key: 'name',
      className: 'font-lexend h-11 ',
      render: (data) => {
        return <div className="flex max-w-xs flex-col">{data?.id}</div>;
      },
    },
    {
      title: <span className="font-normal ">Links</span>,
      dataIndex: 'name',
      key: 'name',
      className: 'font-lexend h-11',
      render: (data) => {
        return <div className="flex max-w-xs flex-col ">{data?.links}</div>;
      },
    },
    {
      title: <span className="font-normal ">Prefix</span>,
      dataIndex: 'name',
      key: 'name',
      className: 'font-lexend h-11',
      render: (data) => {
        return <div className="flex max-w-xs flex-col">{data?.prefix}</div>;
      },
    },
    {
      title: <span className="font-normal ">Add Tags</span>,
      dataIndex: 'name',
      key: 'name',
      className: 'font-lexend h-11',
      render: (data) => {
        const categoriesArray = data['select tags']?.split(', ');

        const convertedList = categoriesArray.map((category) => ({
          label: category,
          value: category,
        }));
        return (
          <div className="flex max-w-xs flex-col">
            <Dropdown options={convertedList} onSelect={handleSelect} />
          </div>
        );
      },
    },
    {
      title: <span className="font-normal">Selected Tags</span>,
      dataIndex: 'name',
      key: 'name',
      className: 'font-lexend h-11',
      render: (data) => {
        return (
          <div className="flex max-w-xs flex-col">{data['selected tags']}</div>
        );
      },
    },
  ];

  return (
    <>
      <div className="flex w-full flex-row">
        <SideNav />
        <div className="flex w-full flex-col p-4 mt-1.5 ">
          <div className="flex w-full flex-row items-center justify-between ">
            <div className="text-lg">Upload CSV</div>
            <div className="flex flex-row items-center gap-4">
              <svg
                width="30"
                height="30"
                viewBox="0 0 19 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.3862 13.3255V9.20108C16.3862 5.5011 14.2012 2.38423 11.2412 1.44687C10.9482 0.59807 10.2322 0 9.38623 0C8.54023 0 7.82423 0.59807 7.53123 1.44687C4.57123 2.38538 2.38623 5.5011 2.38623 9.20108V13.3255L0.679231 15.2887C0.586189 15.3954 0.512401 15.5221 0.462116 15.6617C0.411831 15.8012 0.386041 15.9508 0.386232 16.1019V18.4022C0.386232 18.7072 0.491588 18.9997 0.679125 19.2154C0.866661 19.4311 1.12102 19.5523 1.38623 19.5523H17.3862C17.6514 19.5523 17.9058 19.4311 18.0933 19.2154C18.2809 18.9997 18.3862 18.7072 18.3862 18.4022V16.1019C18.3864 15.9508 18.3606 15.8012 18.3103 15.6617C18.2601 15.5221 18.1863 15.3954 18.0932 15.2887L16.3862 13.3255ZM16.3862 17.252H2.38623V16.578L4.09323 14.6148C4.18627 14.5081 4.26006 14.3814 4.31035 14.2419C4.36063 14.1023 4.38642 13.9527 4.38623 13.8016V9.20108C4.38623 6.03016 6.62923 3.45041 9.38623 3.45041C12.1432 3.45041 14.3862 6.03016 14.3862 9.20108V13.8016C14.3862 14.1076 14.4912 14.3997 14.6792 14.6148L16.3862 16.578V17.252ZM9.38623 23.0027C10.0055 23.0036 10.6097 22.7826 11.1147 22.3703C11.6198 21.9581 12.0006 21.3751 12.2042 20.7024H6.56823C6.77189 21.3751 7.15271 21.9581 7.65774 22.3703C8.16277 22.7826 8.76693 23.0036 9.38623 23.0027Z"
                  fill="black"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                shape-rendering="geometricPrecision"
                text-rendering="geometricPrecision"
                image-rendering="optimizeQuality"
                fill-rule="evenodd"
                clip-rule="evenodd"
                viewBox="0 0 512 512.337"
              >
                <path
                  fill="#194794"
                  fill-rule="nonzero"
                  d="M318.647 319.401c17.395 38.715 58.464 45.55 93.095 52.245C462.398 381.432 512 429.266 512 483.478v22.094c0 3.725-3.04 6.765-6.775 6.765H6.775c-3.735 0-6.775-3.04-6.775-6.765v-19.988c0-65.14 52.682-103.616 105.911-110.739 38.724-5.175 70.951-10.431 84.581-57.241 3.527 3.089 7.233 6.208 11.008 9.566 35.277 31.363 75.025 32.724 109.01-.049 2.792-2.703 5.524-5.246 8.137-7.72z"
                />
                <path
                  fill="#D2A75F"
                  fill-rule="nonzero"
                  d="M318.647 319.411c9.1 20.247 24.677 31.781 42.409 39.122-59.984 44.01-142.797 41.466-204.49 3.855 18.687-10.064 28.045-24.638 33.907-44.795 3.526 3.09 7.242 6.21 11.027 9.577 35.277 31.363 75.025 32.724 109.01-.049 2.792-2.703 5.524-5.246 8.137-7.71z"
                />
                <path
                  fill="#DBB26F"
                  fill-rule="nonzero"
                  d="M259.328 391.058c-35.873.159-71.955-9.895-102.762-28.67 18.617-10.024 28.214-24.826 33.916-44.795 3.537 3.09 7.233 6.21 11.018 9.577 18.528 16.472 38.307 24.667 57.828 23.992v39.896z"
                />
                <path
                  fill="#E9BE79"
                  d="M134.739 212.161c4.655-13.324 15.482-9.04 30.904-3.412l-.142-.666.142.075c11.004-115.475 85.398-49.193 141.122-109.957 29.279 14.418 48.212 43.104 43.366 107.067l.156-.124a280.937 280.937 0 01-1.534 10.001c14.023-10.621 34.241-9.633 27.882 13.905l-8.687 24.605c-2.077 5.889-3.466 8.027-10.91 7.627-3.288-.175-6.595-1.443-9.894-3.622 3.046 36.31-14.579 48.157-36.64 69.449-33.977 32.787-73.728 31.433-108.995.059-20.658-18.375-39.004-29.534-39.92-67.307-5.356 1.641-10.42 1.939-14.842-.575-8.814-5.016-12.024-19.614-12.505-28.962-.193-3.759-.032-14.335.497-18.163z"
                />
                <path
                  fill="#F2CD8C"
                  d="M134.741 212.161c4.66-13.326 15.477-9.036 30.903-3.411l-.138-.665.138.075c8.039-84.405 49.947-71.713 93.68-82.493V351.16c-19.515.683-39.287-7.506-57.817-23.992-20.657-18.374-39.005-29.529-39.914-67.305-5.356 1.637-10.422 1.937-14.843-.577-12.837-7.306-13.871-33.724-12.009-47.125z"
                />
                <path
                  fill="#333231"
                  d="M108.075 92.791C176.124 8.703 254.558-37.032 313.452 37.772c72.174 3.79 97.211 121.553 36.678 167.497 4.849-63.963-14.086-92.651-43.364-107.067-55.725 60.764-130.12-5.52-141.122 109.955l-26.707-13.909c-2.652-33.119 5.106-90.577-30.862-101.457z"
                />
              </svg>
            </div>
          </div>
          <div className="mt-40 flex flex-col items-center justify-center gap-10">
            <div className="flex w-[37.35rem] flex-col items-center  justify-center gap-4 rounded-md bg-white p-4">
              <div className="flex  h-64 w-full flex-col items-center justify-center gap-4 rounded-md border border-dotted text-xs text-[#999CA0]">
                <svg
                  width="37"
                  height="36"
                  viewBox="0 0 37 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_22_2395)">
                    <path
                      d="M22.7801 17.2998L10.9556 15.1998V30.7167C10.9556 31.4253 11.5264 31.9998 12.2305 31.9998H32.6341C33.3382 31.9998 33.9091 31.4253 33.9091 30.7167V24.9998L22.7801 17.2998Z"
                      fill="#185C37"
                    />
                    <path
                      d="M22.7801 4H12.2305C11.5264 4 10.9556 4.57446 10.9556 5.2831V11L22.7801 18L29.0401 20.1L33.9091 18V11L22.7801 4Z"
                      fill="#21A366"
                    />
                    <path
                      d="M10.9556 11H22.7801V18H10.9556V11Z"
                      fill="#107C41"
                    />
                    <path
                      opacity="0.1"
                      d="M19.4185 9.60049H10.9556V27.1005H19.4185C20.1216 27.0982 20.6911 26.5251 20.6934 25.8174V10.8836C20.6911 10.1759 20.1216 9.60279 19.4185 9.60049Z"
                      fill="black"
                    />
                    <path
                      opacity="0.2"
                      d="M18.7229 10.3002H10.9556V27.8002H18.7229C19.4261 27.7979 19.9956 27.2248 19.9978 26.5171V11.5833C19.9956 10.8757 19.4261 10.3025 18.7229 10.3002Z"
                      fill="black"
                    />
                    <path
                      opacity="0.2"
                      d="M18.7229 10.3002H10.9556V26.4002H18.7229C19.4261 26.3979 19.9956 25.8248 19.9978 25.1172V11.5833C19.9956 10.8757 19.4261 10.3025 18.7229 10.3002Z"
                      fill="black"
                    />
                    <path
                      opacity="0.2"
                      d="M18.0273 10.3002H10.9556V26.4002H18.0273C18.7305 26.3979 19.3 25.8248 19.3023 25.1172V11.5833C19.3 10.8757 18.7305 10.3025 18.0273 10.3002Z"
                      fill="black"
                    />
                    <path
                      d="M5.27496 10.3002H18.0274C18.7315 10.3002 19.3023 10.8747 19.3023 11.5833V24.4171C19.3023 25.1258 18.7315 25.7002 18.0274 25.7002H5.27496C4.57082 25.7002 4 25.1258 4 24.4171V11.5833C4 10.8747 4.57082 10.3002 5.27496 10.3002Z"
                      fill="url(#paint0_linear_22_2395)"
                    />
                    <path
                      d="M7.94873 22.1706L10.6308 17.9881L8.1734 13.8287H10.1502L11.4912 16.4887C11.615 16.7414 11.6999 16.929 11.7458 17.0529H11.7632C11.8513 16.8513 11.944 16.6555 12.0414 16.4656L13.475 13.8301H15.2897L12.7696 17.965L15.3537 22.1706H13.4228L11.8738 19.2509C11.8008 19.1267 11.7389 18.9962 11.6888 18.861H11.6658C11.6204 18.9934 11.5602 19.1203 11.4864 19.239L9.89144 22.1706H7.94873Z"
                      fill="white"
                    />
                    <path
                      d="M32.634 4H22.78V11H33.909V5.2831C33.909 4.57446 33.3382 4 32.634 4Z"
                      fill="#33C481"
                    />
                    <path d="M22.78 18H33.909V25H22.78V18Z" fill="#107C41" />
                  </g>
                  <defs>
                    <linearGradient
                      id="paint0_linear_22_2395"
                      x1="6.65832"
                      y1="9.29766"
                      x2="16.7396"
                      y2="26.6473"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#18884F" />
                      <stop offset="0.5" stop-color="#117E43" />
                      <stop offset="1" stop-color="#0B6631" />
                    </linearGradient>
                    <clipPath id="clip0_22_2395">
                      <rect
                        width="29.9091"
                        height="28"
                        fill="white"
                        transform="translate(4 4)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <span>
                  Drop your excel sheet here or{' '}
                  <span className="text-[#605BFF]">browse</span>
                </span>
              </div>
              <div className="w-full">
                <input
                  type="file"
                  accept=".csv"
                  onChange={handleFileChange}
                  style={{ display: 'none' }}
                  ref={fileInputRef}
                />

                {/* Button to trigger file input */}
                <button
                  className="flex w-full flex-row items-center justify-center gap-2 rounded-md bg-[#605BFF] px-4 py-2 text-white"
                  onClick={handleButtonClick}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.125 14.1923V16.9327C19.125 18.1435 18.1435 19.125 16.9327 19.125H7.06731C5.85653 19.125 4.875 18.1435 4.875 16.9327V14.1923M12 15.8365V4.875M12 4.875L8.71154 8.16346M12 4.875L15.2885 8.16346"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  Upload
                </button>
              </div>
            </div>

            {jsonResult?.length > 0 && (
              <div className="flex flex-col gap-4">
                <span>Uploads</span>
                <Table
                  dataSource={jsonResult}
                  columns={columns}
                  rowClassName="h-16 max-h-min text-sm text-Neutral-500"
                ></Table>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;