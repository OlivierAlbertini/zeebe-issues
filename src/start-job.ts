import { ZBClient } from "zeebe-node";
import { MessageName } from "./constants";

const zbc = new ZBClient("localhost");

const count = process.env.COUNT || 1;
export async function run_jobs() {
    const payload = { amount: 100 };
    for (let n = 0; n < count; n++) {
        await publishStartMessage(MessageName.MSG_START_TEST, payload);
    }
}

export function publishStartMessage(name, payload) {
    // tslint:disable-next-line
    console.log(`Sending message ${name}`);
    return zbc.publishStartMessage({ name, variables: payload, timeToLive: 5000 });    
}
