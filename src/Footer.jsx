function Footer() {
  const startYear = 2024;
  const currYear = new Date().getFullYear();

  return (
    <footer>
      <p>
        {"© "}
        {currYear - startYear === 0
          ? startYear + " "
          : startYear + "-" + currYear + " "}
        ricardofig016.github.io
      </p>
    </footer>
  );
}

export default Footer;
