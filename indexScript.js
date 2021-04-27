const ajax = new XMLHttpRequest();

function getComputersBySoftware() {
  let software = document.getElementById("software").value;
  ajax.onreadystatechange = updateSoftware;
  ajax.open("GET", "getComputersBySoftware.php?software=" + software);
  ajax.send(null);
}

function updateSoftware() {
  if (ajax.readyState === 4) {
    if (ajax.status === 200) {
      let text = document.getElementById('software-table');
      let res = ajax.responseText;
      let resHtml = "";
      let newReq = [];

      let lastReqHtml = "";
      let lastReq = JSON.parse(localStorage.getItem("software"));

      res = JSON.parse(res);

      res.forEach(computer => {
        resHtml += "<tr><td style = 'border: 1px solid'>" + computer["netname"] + "</td><td style = 'border: 1px solid'>" + computer["vendor"] + "</td></tr>";
        newReq.push(computer["vendor"]);
      });

      if (lastReq == null) {
        lastReqHtml += "<tr><td style = 'border: 1px solid'> there are no recent reqs </td></tr>";
        document.getElementById("softwareRecent-table").innerHTML = lastReqHtml;
      } else {
        lastReq.forEach(computer => {
          lastReqHtml += "<tr><td style = 'border: 1px solid'>" + computer + "</td></tr>";
        });
        document.getElementById("softwareRecent-table").innerHTML = lastReqHtml;
      }
      localStorage.setItem("software", JSON.stringify(newReq));
      text.innerHTML = resHtml;
    }
  }
}

function getComputersByProcessor() {
  let name = document.getElementById("processor").value;
  ajax.onreadystatechange = updateItems;
  ajax.open("GET", "getComputersByProcessor.php?processor="+ name);
  ajax.send(null);
}

function updateItems() {
  if (ajax.readyState === 4) {
    if (ajax.status === 200) {
      let text = document.getElementById('processor-table');
      let res = ajax.responseText;
      let resHtml = "";
      let newReq = [];

      let lastReqHtml = "";
      let lastReq = JSON.parse(localStorage.getItem("processor"));

      res = JSON.parse(res);
      res.forEach(computer => {
        resHtml += "<tr><td style = 'border: 1px solid'>" + computer["netname"] + "</td><td style = 'border: 1px solid'>" + computer["vendor"] + "</td></tr>";
        newReq.push(computer["vendor"]);
      });

      if (lastReq == null) {
        lastReqHtml += "<tr><td style = 'border: 1px solid'> there are no recent reqs </td></tr>";
        document.getElementById("processorRecent-table").innerHTML = lastReqHtml;
      } else {
        lastReq.forEach(computer => {
          lastReqHtml += "<tr><td style = 'border: 1px solid'>" + computer + "</td></tr>";
        });
        document.getElementById("processorRecent-table").innerHTML = lastReqHtml;
      }
      localStorage.setItem("processor", JSON.stringify(newReq));
      text.innerHTML = resHtml;
    }
  }
}

function quarantii() {
  ajax.onreadystatechange = updateComputers;
  ajax.open("GET", "getComputersWithoutQuarantii.php");
  ajax.send(null);
}

function updateComputers() {
  if (ajax.readyState === 4) {
    if (ajax.status === 200) {
      let text = document.getElementById('quarantii-table');
      let res = ajax.responseText;
      let newReq = [];
      let lastReqHtml = "";
      let lastReq = JSON.parse(localStorage.getItem("quarantii"));
      let resHtml = "";

      res = JSON.parse(res);

      res.forEach(computer => {
        resHtml += "<tr><td style = 'border: 1px solid'>" + computer["netname"] + "</td><td style = 'border: 1px solid'>" + computer["vendor"] + "</td></tr>";
        newReq.push(computer);
      });

      if (lastReq == null) {
        lastReqHtml += "<tr><td style = 'border: 1px solid'> there are no recent reqs </td></tr>";
        document.getElementById("quarantiiRecent-table").innerHTML = lastReqHtml;
      } else {
        lastReq.forEach(computer => {
          lastReqHtml += "<tr><td style = 'border: 1px solid'>" + computer["netname"] + "</td><td style = 'border: 1px solid'>" + computer["vendor"] + "</td></tr>";
        });
        document.getElementById("quarantiiRecent-table").innerHTML = lastReqHtml;
      }
      localStorage.setItem("quarantii", JSON.stringify(newReq));
      text.innerHTML = resHtml;
    }
  }
}