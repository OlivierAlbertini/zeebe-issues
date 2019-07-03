import { ZBClient } from "zeebe-node";
/* tslint:disable:no-console */
export async function deploy(workflowFile: string | string[]) {
    const zbc = new ZBClient("localhost");
    console.log(`Deploying ${workflowFile}...`);
    const res = await zbc.deployWorkflow(workflowFile);
    if (res.key !== -1) {
        console.log(res);
    }
}
