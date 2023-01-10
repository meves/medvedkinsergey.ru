export const downLoadFile = async (fname: string) => {
    const filename = `${fname}`;
    const url = process.env.NODE_ENV === 'development' 
        ? `${process.env.url_development}${filename}`
        : `${process.env.url_production}${filename}`;
    const response = await fetch(url, { 
        headers: {
            "Content-Type": "application/pdf;charset=UTF-8"
        } 
    });
    const blob = await response.blob();
    const objectUrl = URL.createObjectURL(blob); 
    open(objectUrl);
    URL.revokeObjectURL(objectUrl);
}