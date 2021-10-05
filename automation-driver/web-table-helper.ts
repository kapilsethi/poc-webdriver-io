import { expect } from "chai";
import { getLogger } from "log4js";
const logger = getLogger();
logger.level = "debug";

class WebTableHelper {
    async getCellDateFromParticularRow(tableIdentifier, rowText) {
        const rowElements = await $(tableIdentifier).$$("tr");
        let actualColumnText = "";
        for(const rowElement of rowElements) {
            const currentRowText = await rowElement.$("th").getText();
            console.log("current row text: ", currentRowText.trim());
            if(currentRowText.trim().includes(rowText.trim())) {
                actualColumnText = await rowElement.$("td").getText();
                logger.info(`found matching row for ${rowText} and here is the fetched text: ${actualColumnText}`);
                break;
            }
        };
        if(actualColumnText === "") {
            expect.fail(`could not find the ${rowText} text in the table ${tableIdentifier}`);
        }
        return actualColumnText;
    }
}

const webTableHelper = new WebTableHelper();
export { webTableHelper }