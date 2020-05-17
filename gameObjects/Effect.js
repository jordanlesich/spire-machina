class Effect {
    constructor(effect, power, host){
        this.name = effect.name;
        this.power = power;
        this.trigger = effect.trigger;
        this.type = effect.type;
        this.action = effect.action;
        this.host = host;
        this.lifecycle = effect.lifecycle;
        this.lifecycleAction = effect.lifecycleAction;
        }
    decrement(){
        
        this.power--;
        if (this.power === 0 ){
            this.host.removeEffect(this.name)
        }
    }
    increment(){
       this.power++;
    }
    increasePower(pwr){
        const newPower = this.power + pwr
        this.power = newPower;
    }
    handleLifecycle(){
        if(this.lifecycleAction === 'increment'){
            this.increment();
            this.host.updateFX_UI()
        }
        else if(this.lifecycleAction === 'decrement'){
            this.decrement();
            this.host.updateFX_UI()
        }
    }
}



