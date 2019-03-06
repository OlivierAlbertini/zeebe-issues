import * as uuid from "uuid";
import * as ZB from "zeebe-node";
import { TaskType } from "./constants";
import { deploy } from "./deploy";
import { run_jobs } from "./start-job";

async function start() {
    // await deploy("src/test-process.bpmn", false);
    // await run_jobs();
    const zbc = new ZB.ZBClient("localhost");
    zbc.createWorker(uuid.v4(), TaskType.TASK_1, (job) => {
        console.log(`retries: ${job.retries}`);
        const retryCount = job.retries + 1; 
        zbc.failJob({ errorMessage: `Oups, retries: ${job.retries}`, retries: retryCount, jobKey: job.key });
    }, { timeout: 5000 });
}

start();
