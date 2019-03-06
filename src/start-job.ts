import { ZBClient } from "zeebe-node";
import { MessageName } from "./constants";

const zbc = new ZBClient("localhost");

const count = process.env.COUNT || 1;
export async function run_jobs() {
    const payload = { key1: "original" };
    for (let n = 0; n < count; n++) {
        await publishStartMessage(MessageName.MSG_START_TEST, payload);
    }
}

function publishStartMessage(name, payload) {
    // tslint:disable-next-line
    console.log(`Sending message ${name}`);
    zbc.publishStartMessage({
        name,
        payload,
        timeToLive: 5000,
    });
}
