import Select from "react-select";
import React, { useState } from "react";
import { Animals, Birds, World, animalcolor, birdcolor } from "./Datas";

const Against = () => {
  const [selectedWorld, setSelectedWorld] = useState(null);
  const [selectedBird, setSelectedBird] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

  const handleWorldChange = (selectedOption) => {
    setSelectedWorld(selectedOption);
    setSelectedBird(null); // Reset selected bird when world changes
    setSelectedColor(null); // Reset selected color when world changes
  };

  const handleBirdChange = (selectedOption) => {
    setSelectedBird(selectedOption);
    setSelectedColor(null); // Reset selected color when bird changes
  };

  const handleColorChange = (selectedOption) => {
    setSelectedColor(selectedOption);
  };

  const worlds = World.map((item) => ({
    value: item.value,
    label: item.name,
  }));

  const birdOptions = Birds.filter(
    (bird) => bird.value === selectedWorld?.value
  ).map((item) => ({
    value: item.id,
    label: item.name,
  }));

  const animalOptions = Animals.filter(
    (animal) => animal.value === selectedWorld?.value
  ).map((item) => ({
    value: item.id,
    label: item.name,
  }));

  const animalColorOptions = animalcolor
    .filter((animal) => animal.value === selectedWorld?.value)
    .map((item) => ({
    //   value: item.color,
      label: item.color,
    }));

  const birdColorOptions = birdcolor
    .filter((bird) => bird.value === selectedWorld?.value)
    .map((item) => ({
    //   value: item.color,
      label: item.color,
    }));

  console.log("Animal Color Options:", animalColorOptions);
  console.log("Bird Color Options:", birdColorOptions);
  console.log("Selected World Value:", selectedWorld?.value);

  return (
    <div className="against">
        <div className="sub-box">
      <Select
        placeholder="Select World"
        className="world-name"
        options={worlds}
        onChange={handleWorldChange}
        value={selectedWorld}
      />
      <Select
        placeholder="Select Delegate"
        className="bird-name"
        options={selectedWorld?.value === "queen" ? birdOptions : animalOptions}
        onChange={handleBirdChange}
        value={selectedBird}
      />

      <Select
        placeholder="Select Color"
        className="color-name"
        options={
          selectedWorld?.value === "queen"
            ? birdColorOptions
            : animalColorOptions
        }
        onChange={handleColorChange}
        value={selectedColor}
      />
    </div>
    </div>
  );
};

export default Against;

// import Select from "react-select";
// import React, { useState, useEffect } from "react";
// import { Animals, Birds, World, animalcolor, birdcolor } from "./Datas";

// const Against = () => {
//   const [selectedWorld, setSelectedWorld] = useState(null);
//   const [selectedBird, setSelectedBird] = useState(null);
//   const [selectedColor, setSelectedColor] = useState(null);
//   const [birdOptions, setBirdOptions] = useState([]);
//   const [animalOptions, setAnimalOptions] = useState([]);
//   const [birdColorOptions, setBirdColorOptions] = useState([]);
//   const [animalColorOptions, setAnimalColorOptions] = useState([]);
// //   const [subBoxes, setSubBoxes] = useState([{ id: 1 }]); // Initial sub-box
//   const [tableRows, setTableRows] = useState([
//     {
//         selectedWorld: "",
//         selectedBird: "",
//         selectedColor: "",

//     },
//   ]);
//   useEffect(() => {
//     setBirdOptions(
//       Birds.filter((bird) => bird.value === selectedWorld?.value).map((item) => ({
//         value: item.id,
//         label: item.name,
//       }))
//     );

//     setAnimalOptions(
//       Animals.filter((animal) => animal.value === selectedWorld?.value).map((item) => ({
//         value: item.id,
//         label: item.name,
//       }))
//     );

//     setBirdColorOptions(
//       birdcolor
//         .filter((bird) => bird.value === selectedWorld?.value)
//         .map((item) => ({
//           value: item.color,
//           label: item.color,
//         }))
//     );

//     setAnimalColorOptions(
//       animalcolor
//         .filter((animal) => animal.value === selectedWorld?.value)
//         .map((item) => ({
//           value: item.color,
//           label: item.color,
//         }))
//     );
//   }, [selectedWorld]);

//   const handleWorldChange = (selectedOption, index, field) => {
//     setSelectedWorld(selectedOption);
//     const updatedRows = [...tableRows];
//     updatedRows[index][field] = selectedOption;
//     if (
//         index === updatedRows.length - 1 &&
//         selectedOption &&
//         selectedOption.value !== ""
//       ) {
//         updatedRows.push({
//           delegateName: "",
//           address: "",
//           email: "",
//           pickup: "",
//           drop: "",
//           exception: "",
//         });
//       }

//       setTableRows(updatedRows);
//     setSelectedBird(null);
//     setSelectedColor(null);
//   };

//   const handleBirdChange = (selectedOption) => {
//     setSelectedBird(selectedOption);
//     setSelectedColor(null);
//   };

//   const handleColorChange = (selectedOption) => {
//     setSelectedColor(selectedOption);
//   };

//   const worlds = World.map((item) => ({
//     value: item.value,
//     label: item.name,
//   }));

//   return (
//     <div className="against">
//       {tableRows.map((row, index) => (
//         <div key={index} className="sub-box" >
//           <Select
//             placeholder="Select World"
//             className="world-name"
//             options={worlds}
//             onChange={handleWorldChange}
//             value={row.selectedWorld}
//           />
//           <Select
//             placeholder="Select Delegate"
//             className="bird-name"
//             options={selectedWorld?.value === "queen" ? birdOptions : animalOptions}
//             onChange={handleBirdChange}
//             value={row.selectedBird}
//           />

//           <Select
//             placeholder="Select Color"
//             className="color-name"
//             options={
//               selectedWorld?.value === "queen"
//                 ? birdColorOptions
//                 : animalColorOptions
//             }
//             onChange={handleColorChange}
//             value={row.selectedColor}
//           />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Against;
// import Select from "react-select";
// import React, { useState, useEffect } from "react";
// import { Animals, Birds, World, animalcolor, birdcolor } from "./Datas";

// const Against = () => {
//   const [selectedWorld, setSelectedWorld] = useState(null);
//   const [selectedBird, setSelectedBird] = useState(null);
//   const [selectedColor, setSelectedColor] = useState(null);
//   const [birdOptions, setBirdOptions] = useState([]);
//   const [animalOptions, setAnimalOptions] = useState([]);
//   const [birdColorOptions, setBirdColorOptions] = useState([]);
//   const [animalColorOptions, setAnimalColorOptions] = useState([]);
//   const [tableRows, setTableRows] = useState([
//     {
//       selectedWorld: "",
//       selectedBird: "",
//       selectedColor: "",
//     },
//   ]);

//   useEffect(() => {
//     setBirdOptions(
//       Birds.filter((bird) => bird.value === selectedWorld?.value).map((item) => ({
//         value: item.id,
//         label: item.name,
//       }))
//     );

//     setAnimalOptions(
//       Animals.filter((animal) => animal.value === selectedWorld?.value).map((item) => ({
//         value: item.id,
//         label: item.name,
//       }))
//     );

//     setBirdColorOptions(
//       birdcolor
//         .filter((bird) => bird.value === selectedWorld?.value)
//         .map((item) => ({
//           value: item.color,
//           label: item.color,
//         }))
//     );

//     setAnimalColorOptions(
//       animalcolor
//         .filter((animal) => animal.value === selectedWorld?.value)
//         .map((item) => ({
//           value: item.color,
//           label: item.color,
//         }))
//     );
//   }, [selectedWorld]);

//   const handleWorldChange = (selectedOption, index, field) => {
//     const updatedRows = [...tableRows];
//     updatedRows[index][field] = selectedOption;
//     setSelectedWorld(selectedOption);
//     setSelectedBird(null);
//     setSelectedColor(null);

//     if (
//       index === updatedRows.length - 1 &&
//       selectedOption &&
//       selectedOption.value !== ""
//     ) {
//       updatedRows.push({
//         selectedWorld: "",
//         selectedBird: "",
//         selectedColor: "",
//       });
//     }

//     setTableRows(updatedRows);
//   };

//   const handleBirdChange = (selectedOption) => {
//     setSelectedBird(selectedOption);
//     setSelectedColor(null);
//   };

//   const handleColorChange = (selectedOption) => {
//     setSelectedColor(selectedOption);
//   };

//   const worlds = World.map((item) => ({
//     value: item.value,
//     label: item.name,
//   }));

//   return (
//     <div className="against">
//       {tableRows.map((row, index) => (
//         <div key={index} className="sub-box">
//           <Select
//             placeholder="Select World"
//             className="world-name"
//             options={worlds}
//             onChange={(selectedOption) => handleWorldChange(selectedOption, index, "selectedWorld")}
//             value={row.selectedWorld}
//           />
//           <Select
//             placeholder="Select Delegate"
//             className="bird-name"
//             options={selectedWorld?.value === "queen" ? birdOptions : animalOptions}
//             onChange={handleBirdChange}
//             value={row.selectedBird}
//           />

//           <Select
//             placeholder="Select Color"
//             className="color-name"
//             options={
//               selectedWorld?.value === "queen"
//                 ? birdColorOptions
//                 : animalColorOptions
//             }
//             onChange={handleColorChange}
//             value={row.selectedColor}
//           />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Against;

// import Select from "react-select";
// import React, { useState, useEffect } from "react";
// import { Animals, Birds, World, animalcolor, birdcolor } from "./Datas";

// const Against = () => {
//   const [selectedWorld, setSelectedWorld] = useState(null);
//   const [selectedBird, setSelectedBird] = useState(null);
//   const [selectedColor, setSelectedColor] = useState(null);
//   const [birdOptions, setBirdOptions] = useState([]);
//   const [animalOptions, setAnimalOptions] = useState([]);
//   const [birdColorOptions, setBirdColorOptions] = useState([]);
//   const [animalColorOptions, setAnimalColorOptions] = useState([]);

//   const [tableRows, setTableRows] = useState([
//     {
//       selectedWorld: "",
//       selectedBird: null, // Set initial value to null or the default value you want
//       selectedColor: null,
//     },
//   ]);

//   useEffect(() => {
//     setBirdOptions(
//       Birds.filter((bird) => bird.value === selectedWorld?.value).map(
//         (item) => ({
//           value: item.id,
//           label: item.name,
//         })
//       )
//     );

//     setAnimalOptions(
//       Animals.filter((animal) => animal.value === selectedWorld?.value).map(
//         (item) => ({
//           value: item.id,
//           label: item.name,
//         })
//       )
//     );

//     setBirdColorOptions(
//       birdcolor
//         .filter((bird) => bird.value === selectedWorld?.value)
//         .map((item) => ({
//           value: item.color,
//           label: item.color,
//         }))
//     );

//     setAnimalColorOptions(
//       animalcolor
//         .filter((animal) => animal.value === selectedWorld?.value)
//         .map((item) => ({
//           value: item.color,
//           label: item.color,
//         }))
//     );
//   }, [selectedWorld]);

//   const handleWorldChange = (selectedOption, index, field) => {
//     setSelectedWorld(selectedOption);
//     setSelectedBird(null);
//     setSelectedColor(null);
//     const updatedRows = [...tableRows];
//     updatedRows[index][field] = selectedOption;

//     if (
//       index === updatedRows.length - 1 &&
//       selectedOption &&
//       selectedOption.value !== ""
//     ) {
//       updatedRows.push({
//         selectedWorld: "",
//         selectedBird: null,
//         selectedColor: null,
//       });
//     }

//     setTableRows(updatedRows);
//   };

//   const handleBirdChange = (selectedOption, index, field) => {
//     const updatedRows = [...tableRows];
//     updatedRows[index][field] = selectedOption;
//     setSelectedBird(selectedOption);
//     setSelectedColor(null);
//     setTableRows(updatedRows);
//   };

//   const handleColorChange = (selectedOption, index, field) => {
//     const updatedRows = [...tableRows];
//     updatedRows[index][field] = selectedOption;
//     setSelectedColor(selectedOption);
//     setTableRows(updatedRows);
//   };

//   const worlds = World.map((item) => ({
//     value: item.value,
//     label: item.name,
//   }));

//   return (
//     <div className="against">
//       {tableRows.map((row, index) => (
//         <div key={index} className="sub-box">
//           <Select
//             placeholder="Select World"
//             className="world-name"
//             options={worlds}
//             onChange={(selectedOption) =>
//               handleWorldChange(selectedOption, index, "selectedWorld")
//             }
//             value={row.selectedWorld}
//           />
//         <Select
//   placeholder="Select Delegate"
//   className="bird-name"
//   options={
//     row.selectedWorld?.value === "queen" ? birdOptions : animalOptions
//   }
//   onChange={(selectedOption) =>
//     handleBirdChange(selectedOption, index, "selectedBird")
//   }
//   value={row.selectedBird} // Use selectedBird directly instead of row.selectedBird
// />

//           <Select
//             placeholder="Select Color"
//             className="color-name"
//             options={
//               row.selectedWorld?.value === "queen"
//                 ? birdColorOptions
//                 : animalColorOptions
//             }
//             onChange={(selectedOption) =>
//               handleColorChange(selectedOption, index, "selectedColor")
//             }
//             value={row.selectedColor}
//           />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Against;
