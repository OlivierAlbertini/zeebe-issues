import * as ZB from "zeebe-node";
import { deploy } from "./deploy";

async function start() {
    await deploy("src/MESSAGE_EVENT.bpmn");
    // await run_jobs();
    const zbc = new ZB.ZBClient("localhost");
    try {
        await zbc.publishStartMessage({ name: '__FAKE_MESSAGE_START_EVENT__', variables: { amount: 100 }, timeToLive: 5000 });
        console.log();
        console.log('publishStartMessage success!');
    } catch (error) {
        // expect to catch
        console.log(error);
    }finally {
        zbc.close();
    }
}

start();
