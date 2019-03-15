# Audio-Mosaic
## Photo Mosaics, but for Audio

### EECS 352
### Northwestern University
### Taught by: Bryan Pardo

# Justin Chen - justinchen2020@u.northwestern.edu
# Nico Finkelstein - nicolasfinkelstein2020@u.northwestern.edu  
# Kyle LaBrosse - kylelabrosse2019@u.northwestern.edu



# 1. Introduction: What is this and Why are we doing it?
We wish to generate a copy of an audio signal using snippets from another audio source (e.g. rooster noises, people laughing, keyboard typing) and seeing if our reconstruction is still understandable. We simply noted that this would be something neat to create, although we believe that this project has the potential to be translated into audio synthesis or audio mapping, which may hold more weight in the world of machine perception of audio and music. The decision to create and work on this project was the fact that ultimately found it to be a fun topic – photo mosaics are cool, audio and music are cool. Wouldn’t it be cool if we combined them?

# 2. Related Works
Hazan, Amaury. "Performing expressive rhythms with billaboop voice-driven drum generator." DAFX 2005 (2005). 
- This article discusses using voice to map to drum sounds. The first part involves transforming spoken rhythms to a symbolic score. This project focuses considerably more on rhythm, as our project will only be on comparing sections of sounds of spoken words to other noisy sounds.

Freeman, Jason, et al. "Auracle: a voice-controlled, networked sound instrument." Organised Sound 10.3 (2005): 221-231 
- This article exactly what we’re doing, although our project will likely not be as sophisticated. This research involved splitting up the original spoken voice recording into syllables. We also assume the database used to compare the recording will be different.

Janer J., Maestre E. (2008) Mapping Phonetic Features for Voice-Driven Sound Synthesis. In: Filipe J., Obaidat M.S. (eds) E-business and Telecommunications. ICETE 2007. Communications in Computer and Information Science, vol 23. Springer, Berlin, Heidelberg
- This is similar in that they take a person’s voice and map it to certain sounds in a database to reconstruct the original voice. But, instead of trying to imitate an instrument and map our voice to recorded instrument sounds, we want to use a database of noise and map spoken words to the most similar noises

Fasciani, Stefano, and Lonce Wyse. A voice interface for sound generators: adaptive and automatic mapping of gestures to sound. U of Wollongong Australia, 2012. 
- This article is similar to our project in that it also involves mapping voice to certain sounds. This is extremely interesting because it involves using a your voice as an extended controller to a synthesizer, rather than just having the physical controllers. 

# 3. Approach: A KNN-esque Method of Audio Segment Matching
1. Concatenate all sounds from one chosen Target sound category from the ESC-50 audiobank
2. Segment aggregated Target and Source samples into X millisecond windows 
3. Extract features (mfcc, dela-mean mfcc, pitch) of Target segments
4. Use KNN where K = 1 to determine closest sound between each Source segment and every Target segment
5. Append each closest Target segment to a new signal
6. Return new signal of similar-sounding, concatenated sounds

# 4. Evaluation Method: Survey Feedback
To test if our results were understandable,, we had people take a survey, listening to our produced signals and having them guess what phrase it sounds like is being said. To create the signal, we ran our group member Nicolas saying the phrase ”XXXXX” and putting that audio through ESC-50’s audiobank of X sound samples to produce a signal with our code. We had X people fill out the survey, asking “What was said?” and “What sound does it sound like is creating the phrase?”

# 5. Results

# 6. Conclusions, Limitations, and Future Works
Based on our evaluation method, we found our results to be conclusively solid! We were able to create an audio mosaic through audio samples through other sounds, and people were able to recognize what the original sample was! While recognizable, further development would prove significantly beneficial. Granular synthesis would allow for pitch alteration and improved smoothing for each sample. Extensive searching for an implementable version of granular synthesis proved fruitless, as for the few  implementations that currently exist, many require specific limitations outside of our bounds (such as having a specific Apple OS version). Additionally, we created windows based purely on integer intervals. If we were to create these windows based on a metric more natural to sounds and speech, such as syllable detection using onset detection, we could create more interesting and potentially more accurate sounds.


