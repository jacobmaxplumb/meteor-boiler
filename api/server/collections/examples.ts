import { MongoObservable } from 'meteor-rxjs';
import { Example } from '../models';

export const Examples = new MongoObservable.Collection<Example>('example');
