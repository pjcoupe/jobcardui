export class JobCardModel {
    _id: string;
    jobID: number;
    jobDate: Date = new Date();
    jobCustomer: string = null;
    jobAddress: string = null;
    jobPhone: string = null;
    jobEmail: string = null;
    jobOrderNumber: string = null;
    jobFussyNotes: string = null;
    jobDelivery: string = null;
    jobReceivedFrom: string = null;
    jobDateRequired: Date = null;
    jobDateCompleted: Date = null;
    jobPaymentBy: string = null;
    jobNotes: string = null;
    jobDatePaid: Date = null;
    jobDetail00: string = null;
    jobType00: string = null;
    jobQty00: number = null;
    jobUnitPrice00: number = null;
    jobPrice00: number = null;
    jobDetail01: string = null;
    jobType01: string = null;
    jobQty01: number = null;
    jobUnitPrice01: number = null;
    jobPrice01: number = null;
    jobDetail02: string = null;
    jobType02: string = null;
    jobQty02: number = null;
    jobUnitPrice02: number = null;
    jobPrice02: number = null;
    jobDetail03: string = null;
    jobType03: string = null;
    jobQty03: number = null;
    jobUnitPrice03: number = null;
    jobPrice03: number = null;
    jobDetail04: string = null;
    jobType04: string = null;
    jobQty04: number = null;
    jobUnitPrice04: number = null;
    jobPrice04: number = null;
    jobDetail05: string = null;
    jobType05: string = null;
    jobQty05: number = null;
    jobUnitPrice05: number = null;
    jobPrice05: number = null;
    jobDetail06: string = null;
    jobType06: string = null;
    jobQty06: number = null;
    jobUnitPrice06: number = null;
    jobPrice06: number = null;
    jobDetail07: string = null;
    jobType07: string = null;
    jobQty07: number = null;
    jobUnitPrice07: number = null;
    jobPrice07: number = null;
    jobDetail08: string = null;
    jobType08: string = null;
    jobQty08: number = null;
    jobUnitPrice08: number = null;
    jobPrice08: number = null;
    jobDetail09: string = null;
    jobType09: string = null;
    jobQty09: number = null;
    jobUnitPrice09: number = null;
    jobPrice09: number = null;
    jobDetail10: string = null;
    jobType10: string = null;
    jobQty10: number = null;
    jobUnitPrice10: number = null;
    jobPrice10: number = null;
    jobDetail11: string = null;
    jobType11: string = null;
    jobQty11: number = null;
    jobUnitPrice11: number = null;
    jobPrice11: number = null;
    jobDetail12: string = null;
    jobType12: string = null;
    jobQty12: number = null;
    jobUnitPrice12: number = null;
    jobPrice12: number = null;
    jobDetail13: string = null;
    jobType13: string = null;
    jobQty13: number = null;
    jobUnitPrice13: number = null;
    jobPrice13: number = null;
    jobDetail14: string = null;
    jobType14: string = null;
    jobQty14: number = null;
    jobUnitPrice14: number = null;
    jobPrice14: number = null;
    jobDetail15: string = null;
    jobType15: string = null;
    jobQty15: number = null;
    jobUnitPrice15: number = null;
    jobPrice15: number = null;
    jobDetail16: string = null;
    jobType16: string = null;
    jobQty16: number = null;
    jobUnitPrice16: number = null;
    jobPrice16: number = null;
    jobDetail17: string = null;
    jobType17: string = null;
    jobQty17: number = null;
    jobUnitPrice17: number = null;
    jobPrice17: number = null;
    jobRepair: boolean = null;
    jobRepairText: string = null;
    jobRepairType: string = null;
    jobRepairQty: number = null;
    jobRepairUnitPrice: number = null;
    jobRepairPrice: number = null;
    jobStrip: boolean = null;
    jobStripText: string = null;
    jobStripType: string = null;
    jobStripQty: number = null;
    jobStripUnitPrice: number = null;
    jobStripPrice: number = null;
    jobPolish: boolean = null;
    jobPolishText: string = null;
    jobPolishType: string = null;
    jobPolishQty: number = null;
    jobPolishUnitPrice: number = null;
    jobPolishPrice: number = null;
    jobPlating: boolean = null;
    jobPlatingText: string = null;
    jobPlatingType: string = null;
    jobPlatingQty: number = null;
    jobPlatingUnitPrice: number = null;
    jobPlatingPrice: number = null;
    jobLaquer: boolean = null;
    jobLaquerText: string = null;
    jobLaquerType: string = null;
    jobLaquerQty: number = null;
    jobLaquerUnitPrice: number = null;
    jobLaquerPrice: number = null;
    jobSilvGalv: boolean = null;
    jobSilvGalvText: string = null;
    jobSilvGalvType: string = null;
    jobSilvGalvQty: number = null;
    jobSilvGalvUnitPrice: number = null;
    jobSilvGalvPrice: number = null;
    jobGoldGalv: boolean = null;
    jobGoldGalvText: string = null;
    jobGoldGalvType: string = null;
    jobGoldGalvQty: number = null;
    jobGoldGalvUnitPrice: number = null;
    jobGoldGalvPrice: number = null;
    jobWheelCrack: boolean = null;
    jobWheelCrackText: string = null;
    jobWheelCrackType: string = null;
    jobWheelCrackQty: number = null;
    jobWheelCrackUnitPrice: number = null;
    jobWheelCrackPrice: number = null;
    jobWheelDent: boolean = null;
    jobWheelDentText: string = null;
    jobWheelDentType: string = null;
    jobWheelDentQty: number = null;
    jobWheelDentUnitPrice: number = null;
    jobWheelDentPrice: number = null;
    jobWheelMachine: boolean = null;
    jobWheelMachineText: string = null;
    jobWheelMachineType: string = null;
    jobWheelMachineQty: number = null;
    jobWheelMachineUnitPrice: number = null;
    jobWheelMachinePrice: number = null;
    jobTyre: boolean = null;
    jobTyreText: string = null;
    jobTyreType: string = null;
    jobTyreQty: number = null;
    jobTyreUnitPrice: number = null;
    jobTyrePrice: number = null;
    jobFreight: string = null;
    jobSubTotal: number = 0;
    jobGST: number = 0;
    jobTOTAL: number = 0;
    jobCompleted: boolean = false;
    jobCollected: string = null;
    jobBusinessName: string = null;

    static getJobDetailInfo(): { maxCount: number, suffixAndType: Array<{ suffix: string, type: 'string' | 'number' }> } {
        return {
            maxCount: 17, suffixAndType: [
                { suffix: "Detail", type: "string" },
                { suffix: "Type", type: "string" },
                { suffix: "Qty", type: "number" },
                { suffix: "UnitPrice", type: "number" },
                { suffix: "Price", type: "number" }]
        };
    }
    static getRepeatedNameList(): { suffixAndType: Array<{ suffix: string, type: 'string' | 'number' }>, names: Array<string> } {
        return {
            names: ["Tyre", "WheelMachine", "WheelDent",
                "WheelCrack", "GoldGalv", "SilvGalv", "Laquer",
                "Plating", "Polish", "Strip", "Repair"],
            suffixAndType: [
                { suffix: "Text", type: "string" },
                { suffix: "Type", type: "string" },
                { suffix: "Qty", type: "number" },
                { suffix: "UnitPrice", type: "number" },
                { suffix: "Price", type: "number" }
            ]
        };
    }
    constructor(obj: any = null) {
        
        if (obj && typeof obj === "object") {
            Object.assign(this, obj);
            let keys = Object.keys(this);
            for (let key of keys){
                let value = this[key];
                if (value && typeof value !== "function"){
                    if (key.includes("Date")){
                        this[key] = new Date(value);
                    }
                }
            }            
        }
    }
}
