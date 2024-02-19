
function start(song) 

end

function update(elapsed) 

end

function beatHit(beat) 

end

function stepHit(step)
	print(step)

	if step == 66 then
		print("sneeze nigga")
		playActorAnimation("momi","ah",false,false)
	end
	if step == 68 then
		playActorAnimation("momi","chu",false,false)
	end
	
	if step == 138 then
		print("sneeze nigga")
		playActorAnimation("momi","ah",false,false)
	end
	if step == 140 then
		playActorAnimation("momi","chu",false,false)
	end
	
	if step == 416 then
	print("sneeze nigga")
		playActorAnimation("momi","ah",false,false)
	end
	if step == 420 then
		playActorAnimation("momi","chu",false,false)
	end
	if step == 424 then
		playActorAnimation("momi","danceLeft-alt",false,false)
	end
	
	if step == 562 then
		playActorAnimation("momi","ah",false,false)
	end
	if step == 564 then
		playActorAnimation("momi","chu",false,false)
	end
	
	if step == 634 then
		playActorAnimation("momi","ah",false,false)
	end
	if step == 636 then
		playActorAnimation("momi","chu",false,false)
	end
	
	
	if step == 914 then
		playActorAnimation("momi","ah-charged",false,false)
		followYOffset = 20
	end
	if step == 920 then
		playActorAnimation("momi","chu-charged",false,false)
		shakeCam(0.05,1)
	end
	if step == 922 then
	end
	
	if step == 1058 then
		playActorAnimation("momi","ah-charged",false,false)
	end
	if step == 1060 then
		playActorAnimation("momi","chu-charged",false,false)
		shakeCam(0.05,1)
	end
	
	if step == 1130 then
		playActorAnimation("momi","ah",false,false)
	end
	if step == 1132 then
		playActorAnimation("momi","chu",false,false)
		--shakeCam(0.05,1)
	end
	
	if step == 1304 then
		playActorAnimation("momi","ah-charged",false,false)
	end
	if step == 1308 then
		playActorAnimation("momi","chu-charged",false,false)
		shakeCam(0.05,1)
		fadeCam(255,255,255,0.1,false)
	end
end