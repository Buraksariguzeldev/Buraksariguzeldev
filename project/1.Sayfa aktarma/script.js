function goToPage2() {
    const htmlContent = $("#htmlInput").val();

    const queryParams = new URLSearchParams();
    queryParams.set('htmlContent', htmlContent);

    const queryString = queryParams.toString();
    window.location.href = `page2.html?${queryString}`;
}