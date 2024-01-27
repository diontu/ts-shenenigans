const printSizedText = (size: "small" | "large") => {
    if (size === "small") {
        console.log(size.toLowerCase());
    } else {
        console.log(size.toUpperCase());
    }
};

printSizedText("large");
