import React, { useState } from "react";
import { FaCaretRight, FaCaretDown } from "react-icons/fa";
import "../components/form.css";

export default function App() {
  const formData = [
    {
      id: 1,
      type: "General",
      data: [
        {
          id: 101,
          name: "input",
          value: "",
          type: "text",
          placeholder: "Enter your Name",
          label: "Name",
          error: "",
        },
        {
          id: 102,
          name: "input",
          value: "",
          type: "text",
          placeholder: "Enter your Title",
          label: "Title",
          error: "",
        },
        {
          id: 103,
          name: "input",
          value: "",
          type: "text",
          placeholder: "Enter your Previous Document Number",
          label: "Previous Document Number",
          error: "",
        },
        {
          id: 104,
          name: "input",
          value: "0.1",
          type: "text",
          placeholder: "Enter Version number",
          label: "Enter Version number",
          error: "",
        },
        {
          id: 105,
          name: "",
          value: "",
          placeholder: "Enter stage ID",
          label: "Lifecycle state stage ID",
          error: "",
        },
        {
          id: 106,
          name: "",
          value: "",
          placeholder: "Enter Lifecycle stage",
          label: "Lifecycle stage",
          error: "",
        },
        {
          id: 107,
          value: "Standard Operating procedure",
          placeholder: "Enter subtype",
          label: "Subtype",
          error: "",
        },
        {
          id: 108,
          value: "Governance and procedure",
          placeholder: "Enter types",
          label: "Types",
          error: "",
        },
        {
          id: 109,
          value: "",
          placeholder: "Enter Tags",
          label: "Tags",
          error: "",
        },
      ],
      isShowDetails: false,
    },
    {
      id: 2,
      type: "Applicability",
      data: [
        {
          id: 201,
          name: "select",
          options: ["abc", "def"],
          value: "",
          label: "Owing Facility",
          error: "",
        },
        {
          id: 202,
          name: "select",
          options: ["A", "B", "C"],
          value: "",
          label: "Owing Department",
          error: "",
        },
        {
          id: 203,
          name: "select",
          options: ["USA", "UK", "IND"],
          value: "",
          label: "Country",
          error: "",
        },
        {
          id: 204,
          name: "select",
          options: ["A", "B", "C"],
          value: "",
          label: "Impacted Facility",
          error: "",
        },
        {
          id: 205,
          name: "select",
          options: ["A", "B", "C"],
          value: "",
          label: "Impacted Department",
          error: "",
        },
      ],
      isShowDetails: false,
    },
    {
      id: 3,
      type: "Training",
      data: [],
      isShowDetails: false,
    },
    {
      id: 4,
      type: "Status Dates",
      data: [],
      isShowDetails: false,
    },
    {
      id: 5,
      type: "Periodic Review",
      data: [],
      isShowDetails: false,
    },
    {
      id: 6,
      type: "Change Information",
      data: [],
      isShowDetails: false,
    },
  ];

  const [data, setData] = useState([...formData]);
  const [progress, setProgress] = useState(0);

  const handleListClick = (listID) => {
    const updatedList = data.map((list) =>
      list.id === listID
        ? { ...list, isShowDetails: !list.isShowDetails }
        : list
    );

    setData(updatedList);
  };

  const handleInputChange = (e, listId, itemId) => {
    const text = e.target.value;
    const textLength = text.length;
    const newProgress = (textLength / 8) * 100;
    setProgress(newProgress);

    const updatedData = data.map((list) => {
      if (list.id === listId) {
        const updatedList = {
          ...list,
          data: list.data.map((item) =>
            item.id === itemId ? { ...item, value: text } : item
          ),
        };
        return updatedList;
      }
      return list;
    });

    setData(updatedData);
  };

  const getColor = () => {
    if (progress < 30) {
      return "red"; 
    } else if (progress < 60) {
      return "orange"; 
    } else {
      return "green"; 
    }
  };

  const handleSelectChange = (e, listId, itemId) => {
    const selectedOption = e.target.value;

    const updatedData = data.map((list) => {
      if (list.id === listId) {
        const updatedList = {
          ...list,
          data: list.data.map((item) =>
            item.id === itemId ? { ...item, value: selectedOption } : item
          ),
        };
        return updatedList;
      }
      return list;
    });

    setData(updatedData);
  };

  return (
    <>
      <div className="progress-container">
        <div className="progress-bar">
          <div
            className="progress-bar-fill"
            style={{ width: `${progress}%`, backgroundColor: getColor() }}
          ></div>
        </div>
      </div>

      <div className="container">
        <div className="form-container">
          {data.map((list) => (
            <div
              style={{
                height:
                  list.isShowDetails && list.data.length > 0 ? "25rem" : "",
              }}
              className="form-details"
              key={list.id}
            >
              <span onClick={() => handleListClick(list.id)}>
                {list.isShowDetails ? <FaCaretDown /> : <FaCaretRight />}
                {list.type}
              </span>
              {list.isShowDetails &&
                list.data.map((item) => (
                  <div key={item.id}>
                    {item.name === "input" ? (
                      <div className="input-container">
                        <p className="label">{item.label}: </p>
                        <input
                          type={item.type}
                          maxLength={10}
                          value={item.value}
                          placeholder={item.placeholder}
                          onChange={(e) =>
                            handleInputChange(e, list.id, item.id)
                          }
                        />
                      </div>
                    ) : item.name === "select" ? (
                      <div className="input-container">
                        <p className="label">{item.label}: </p>
                        <select
                          value={item.value}
                          onChange={(e) =>
                            handleSelectChange(e, list.id, item.id)
                          }
                        >
                          {item.options.map((opt, idx) => (
                            <option key={idx} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>
                      </div>
                    ) : (
                      <div className="input-container">
                        <p className="label">{item.label}:</p>
                        <input
                          type={item.type}
                          value={item.value}
                          maxLength={8}
                          
                          placeholder={item.placeholder}
                          onChange={(e) =>
                            handleInputChange(e, list.id, item.id)
                          }
                        />
                      </div>
                    )}
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
