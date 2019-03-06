import { ZBClient } from "zeebe-node";
/* tslint:disable:no-console */
export async function deploy(workflowFile: string | string[], forceRedeploy: boolean) {
    const zbc = new ZBClient("localhost");
    const redeploy = forceRedeploy || (process.argv.slice(2) && (process.argv.slice(2)[0] === "--redeploy"));
    console.log(`Deploying ${workflowFile}...`);
    const res = await zbc.deployWorkflow(workflowFile, { redeploy });
    if (res.key !== -1) {
        console.log(res);
    }
}
